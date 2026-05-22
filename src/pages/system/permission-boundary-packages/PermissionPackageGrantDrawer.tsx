import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Alert,
  Checkbox,
  Drawer,
  Empty,
  Message,
  Space,
  Spin,
  Tag,
  Tooltip,
  Tree,
  Typography,
} from '@arco-design/web-react';
import type { CheckboxGroupProps } from '@arco-design/web-react';
import type { PermissionNode } from '@/api/access-control';
import {
  fetchPermissionGrantChildren,
  fetchPermissionMenuGrantTree,
} from '@/api/access-role';
import {
  fetchPermissionBoundaryPackagePermissions,
  savePermissionBoundaryPackagePermissions,
  PermissionBoundaryPackageRecord,
} from '@/api/permission-boundary-package';
import roleStyles from '../roles/style/index.module.less';
import packageStyles from './style/index.module.less';

const { Text } = Typography;

function nodeKey(node: PermissionNode) {
  const pid = node.permissionId ?? node.id;
  return pid != null ? String(pid) : '';
}

function collectMenuTreeMeta(nodes: PermissionNode[] = []) {
  const allKeys = new Set<string>();
  const checkableKeys = new Set<string>();
  const catalogDescendantMenuKeys = new Map<string, string[]>();

  const collect = (items: PermissionNode[]): string[] =>
    items.flatMap((item) => {
      const key = nodeKey(item);
      const isCheckable =
        key &&
        item.checkable !== false &&
        item.nodeType !== 'CATALOG' &&
        !!item.permissionId;
      const childrenMenuKeys = collect(item.children || []);
      const descendantMenuKeys = [
        ...(isCheckable ? [key] : []),
        ...childrenMenuKeys,
      ];

      if (key) {
        allKeys.add(key);
        if (isCheckable) {
          checkableKeys.add(key);
        }
        if (item.nodeType === 'CATALOG') {
          catalogDescendantMenuKeys.set(key, descendantMenuKeys);
        }
      }

      return descendantMenuKeys;
    });

  collect(nodes);
  return { allKeys, checkableKeys, catalogDescendantMenuKeys };
}

function toMenuTreeData(nodes: PermissionNode[] = []) {
  return nodes
    .map((item) => {
      const children = toMenuTreeData(item.children || []);
      const checkable =
        item.checkable !== false &&
        item.nodeType !== 'CATALOG' &&
        !!item.permissionId;
      if (!checkable && children.length === 0) {
        return null;
      }
      return {
        key: nodeKey(item),
        title: `${
          item.permissionName ||
          item.objectName ||
          item.permissionCode ||
          item.id
        }${item.nodeType ? `（${item.nodeType}）` : ''}`,
        disableCheckbox: !checkable,
        children,
      };
    })
    .filter(Boolean);
}

const RESOURCE_SUB_TYPE_TAG: Record<string, { label: string; color?: string }> =
  {
    api: { label: 'api', color: 'arcoblue' },
    button: { label: 'btn', color: 'green' },
    form: { label: 'form', color: 'orange' },
    tab: { label: 'tab', color: 'purple' },
  };

function childResourceSubType(item: PermissionNode) {
  const group = (item.childGroup || item.nodeType || '').toUpperCase();
  if (group === 'API') {
    return item.resourceSubType?.toLowerCase() || 'api';
  }
  if (group === 'ELEMENT' && item.resourceSubType) {
    return item.resourceSubType.toLowerCase();
  }
  return '';
}

function ResourceSubTypeTag({ type }: { type: string }) {
  const key = type.toLowerCase();
  const meta = RESOURCE_SUB_TYPE_TAG[key] ?? { label: key, color: 'gray' };
  return (
    <Tag size="small" color={meta.color}>
      {meta.label}
    </Tag>
  );
}

type ResourceBuckets = {
  element: PermissionNode[];
  api: PermissionNode[];
  other: PermissionNode[];
};

type GrantModeBuckets = {
  manual: ResourceBuckets;
  auto: ResourceBuckets;
};

function emptyBuckets(): ResourceBuckets {
  return { element: [], api: [], other: [] };
}

function splitChildNodes(nodes: PermissionNode[]): GrantModeBuckets {
  const manual = emptyBuckets();
  const auto = emptyBuckets();
  nodes.forEach((item) => {
    const bucket = item.autoGrant === 1 ? auto : manual;
    const group = (item.childGroup || item.nodeType || '').toUpperCase();
    if (group === 'API') {
      bucket.api.push(item);
    } else if (group === 'ELEMENT') {
      bucket.element.push(item);
    } else {
      bucket.other.push(item);
    }
  });
  return { manual, auto };
}

function hasBucketItems(bucket: ResourceBuckets) {
  return (
    bucket.element.length > 0 ||
    bucket.api.length > 0 ||
    bucket.other.length > 0
  );
}

function formatPermissionLabelText(item: PermissionNode) {
  const name =
    item.permissionName || item.objectName || item.permissionCode || item.id;
  const subType = childResourceSubType(item);
  const subLabel = subType
    ? RESOURCE_SUB_TYPE_TAG[subType]?.label ?? subType
    : '';
  const path = item.objectPath
    ? `${item.httpMethod || ''} ${item.objectPath}`.trim()
    : '';
  const title = subLabel ? `${subLabel} ${name}` : String(name);
  return path ? `${title} — ${path}` : title;
}

function ChildPermissionLabel({
  item,
  ellipsis = false,
}: {
  item: PermissionNode;
  ellipsis?: boolean;
}) {
  const name =
    item.permissionName || item.objectName || item.permissionCode || item.id;
  const subType = childResourceSubType(item);
  const path = item.objectPath
    ? `${item.httpMethod || ''} ${item.objectPath}`.trim()
    : '';
  const tooltip = formatPermissionLabelText(item);

  if (ellipsis) {
    return (
      <Tooltip content={tooltip}>
        <span className={roleStyles['grant-label-tooltip-wrap']}>
          <span className={roleStyles['grant-label-inline']}>
            {subType ? <ResourceSubTypeTag type={subType} /> : null}
            <Text className={roleStyles['grant-label-ellipsis']} ellipsis>
              {name}
            </Text>
          </span>
        </span>
      </Tooltip>
    );
  }

  return (
    <Space wrap size={8} align="center">
      {subType ? <ResourceSubTypeTag type={subType} /> : null}
      <span>{name}</span>
      {path ? (
        <Text type="secondary" style={{ fontSize: 12 }}>
          — {path}
        </Text>
      ) : null}
    </Space>
  );
}

type Props = {
  visible: boolean;
  record: PermissionBoundaryPackageRecord | null;
  onClose: () => void;
  onSaved?: () => void;
};

export default function PermissionPackageGrantDrawer({
  visible,
  record,
  onClose,
  onSaved,
}: Props) {
  const [menuTree, setMenuTree] = useState<PermissionNode[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const [selectedMenuKey, setSelectedMenuKey] = useState<string>('');
  const [childNodes, setChildNodes] = useState<PermissionNode[]>([]);
  const childrenCacheRef = useRef<Record<string, PermissionNode[]>>({});
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [loadingChildren, setLoadingChildren] = useState(false);
  const [saving, setSaving] = useState(false);

  const menuTreeMeta = useMemo(() => collectMenuTreeMeta(menuTree), [menuTree]);

  const treeCheckedKeys = useMemo(() => {
    const checkedSet = new Set(checkedKeys);
    const keys = checkedKeys.filter((k) => menuTreeMeta.checkableKeys.has(k));
    menuTreeMeta.catalogDescendantMenuKeys.forEach(
      (descendantMenuKeys, catalogKey) => {
        if (
          descendantMenuKeys.length > 0 &&
          descendantMenuKeys.every((key) => checkedSet.has(key))
        ) {
          keys.push(catalogKey);
        }
      }
    );
    return keys;
  }, [checkedKeys, menuTreeMeta]);

  const selectedCount = useMemo(
    () =>
      checkedKeys.map(Number).filter((id) => Number.isFinite(id) && id > 0)
        .length,
    [checkedKeys]
  );

  const menuChecked = useMemo(
    () => selectedMenuKey !== '' && checkedKeys.includes(selectedMenuKey),
    [checkedKeys, selectedMenuKey]
  );

  useEffect(() => {
    if (!visible || !record) {
      return;
    }
    let canceled = false;
    setLoadingMenu(true);
    setSelectedMenuKey('');
    setChildNodes([]);
    childrenCacheRef.current = {};
    void Promise.all([
      fetchPermissionMenuGrantTree(),
      fetchPermissionBoundaryPackagePermissions(record.id),
    ])
      .then(([tree, selected]) => {
        if (canceled) return;
        setMenuTree(tree || []);
        setCheckedKeys((selected || []).map((item) => String(item.id)));
      })
      .finally(() => !canceled && setLoadingMenu(false));
    return () => {
      canceled = true;
    };
  }, [record, visible]);

  useEffect(() => {
    if (!selectedMenuKey) {
      setChildNodes([]);
      return;
    }
    const cached = childrenCacheRef.current[selectedMenuKey];
    if (cached) {
      setChildNodes(cached);
      return;
    }
    const parentId = Number(selectedMenuKey);
    if (!Number.isFinite(parentId)) {
      setChildNodes([]);
      return;
    }
    let canceled = false;
    setLoadingChildren(true);
    void fetchPermissionGrantChildren(parentId)
      .then((list) => {
        if (canceled) return;
        const nodes = list || [];
        childrenCacheRef.current[selectedMenuKey] = nodes;
        setChildNodes(nodes);
      })
      .finally(() => !canceled && setLoadingChildren(false));
    return () => {
      canceled = true;
    };
  }, [selectedMenuKey]);

  const childCheckedValues = useMemo(
    () =>
      childNodes
        .map((c) => c.permissionId)
        .filter((id): id is number => id != null && id > 0)
        .map(String)
        .filter((k) => checkedKeys.includes(k)),
    [childNodes, checkedKeys]
  );

  const applyAutoGrantForMenu = useCallback(
    (parentKey: string, nodes: PermissionNode[], next: Set<string>) => {
      nodes.forEach((child) => {
        if (child.permissionId && child.autoGrant === 1) {
          next.add(String(child.permissionId));
        }
      });
      childrenCacheRef.current[parentKey] = nodes;
    },
    []
  );

  const syncParentMenuForChildren = useCallback(
    (parentKey: string, childValues: string[], next: Set<string>) => {
      const cached = childrenCacheRef.current[parentKey]?.length
        ? childrenCacheRef.current[parentKey]
        : childNodes;
      if (childValues.length > 0) {
        next.add(parentKey);
        cached.forEach((child) => {
          if (child.permissionId && child.autoGrant === 1) {
            next.add(String(child.permissionId));
          }
        });
      } else {
        next.delete(parentKey);
      }
    },
    [childNodes]
  );

  const handleMenuCheck = (keys: string[]) => {
    const prev = new Set(checkedKeys);
    const next = new Set(
      checkedKeys.filter((k) => !menuTreeMeta.allKeys.has(k))
    );
    keys
      .filter((k) => menuTreeMeta.checkableKeys.has(k))
      .forEach((k) => next.add(k));
    const removed = [...prev].filter(
      (k) => menuTreeMeta.checkableKeys.has(k) && !next.has(k)
    );
    removed.forEach((menuKey) => {
      const cached = childrenCacheRef.current[menuKey];
      if (cached) {
        cached.forEach((child) => {
          if (child.permissionId) {
            next.delete(String(child.permissionId));
          }
        });
      }
    });
    const added = [...next].filter((k) => !prev.has(k));
    added.forEach((menuKey) => {
      const cached = childrenCacheRef.current[menuKey];
      if (cached) {
        applyAutoGrantForMenu(menuKey, cached, next);
      } else if (menuKey === selectedMenuKey && childNodes.length) {
        applyAutoGrantForMenu(menuKey, childNodes, next);
      } else {
        void fetchPermissionGrantChildren(Number(menuKey)).then((list) => {
          const nodes = list || [];
          childrenCacheRef.current[menuKey] = nodes;
          setCheckedKeys((current) => {
            const merged = new Set(current);
            if (!merged.has(menuKey)) {
              return current;
            }
            applyAutoGrantForMenu(menuKey, nodes, merged);
            return Array.from(merged);
          });
        });
      }
    });
    setCheckedKeys(Array.from(next));
  };

  const handleChildChange = (values: string[]) => {
    if (!selectedMenuKey) {
      return;
    }
    const childKeySet = new Set(
      childNodes
        .map((c) => (c.permissionId ? String(c.permissionId) : ''))
        .filter(Boolean)
    );
    setCheckedKeys((prev) => {
      const next = new Set(prev.filter((k) => !childKeySet.has(k)));
      values.forEach((k) => next.add(k));
      syncParentMenuForChildren(selectedMenuKey, values, next);
      return Array.from(next);
    });
  };

  const handleOk = async () => {
    if (!record) {
      return;
    }
    setSaving(true);
    try {
      await savePermissionBoundaryPackagePermissions({
        packageId: record.id,
        permissionIds: checkedKeys
          .map((key) => Number(key))
          .filter((id) => Number.isFinite(id) && id > 0),
      });
      Message.success('权限包权限已保存');
      onSaved?.();
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const grantBuckets = useMemo(() => splitChildNodes(childNodes), [childNodes]);

  const renderPermissionCheckbox = (
    item: PermissionNode,
    layout: 'element' | 'api' = 'api'
  ) => (
    <Checkbox key={item.permissionId} value={String(item.permissionId)}>
      <Space
        wrap={layout !== 'element'}
        size={8}
        align="center"
        className={
          layout === 'element' ? roleStyles['grant-checkbox-label'] : undefined
        }
      >
        <ChildPermissionLabel item={item} ellipsis={layout === 'element'} />
      </Space>
    </Checkbox>
  );

  const renderResourceBlock = (
    title: string,
    items: PermissionNode[],
    blockKey: string,
    layout: 'element' | 'api' = 'api'
  ) => {
    if (!items.length) return null;
    const listClass =
      layout === 'element'
        ? roleStyles['grant-resource-list-element']
        : roleStyles['grant-resource-list-api'];
    return (
      <div className={roleStyles['grant-resource-block']} key={blockKey}>
        <Text
          type="secondary"
          className={roleStyles['grant-resource-type-title']}
        >
          {title}
        </Text>
        <div className={listClass}>
          {items.map((item) => (
            <div
              key={item.permissionId}
              className={`${roleStyles['grant-resource-item']}${
                layout === 'element'
                  ? ` ${roleStyles['grant-resource-item-element']}`
                  : ''
              }`}
            >
              {renderPermissionCheckbox(item, layout)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderGrantModeSection = (
    title: string,
    bucket: ResourceBuckets,
    sectionKey: string
  ) => {
    if (!hasBucketItems(bucket)) return null;
    return (
      <div className={roleStyles['grant-mode-section']} key={sectionKey}>
        <Text className={roleStyles['grant-mode-section-title']}>{title}</Text>
        {renderResourceBlock(
          '页面元素',
          bucket.element,
          `${sectionKey}-element`,
          'element'
        )}
        {renderResourceBlock('API', bucket.api, `${sectionKey}-api`, 'api')}
        {renderResourceBlock(
          '其他',
          bucket.other,
          `${sectionKey}-other`,
          'api'
        )}
      </div>
    );
  };

  const childCheckboxGroupProps: CheckboxGroupProps<React.ReactText> = {
    direction: 'vertical',
    disabled: !selectedMenuKey,
    value: childCheckedValues,
    onChange: handleChildChange,
  };

  return (
    <Drawer
      title={`维护权限：${record?.packageName || ''}`}
      visible={visible}
      width="min(920px, 100vw)"
      onCancel={onClose}
      onOk={handleOk}
      confirmLoading={saving}
      unmountOnExit
      bodyStyle={{
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
      }}
    >
      <div className={packageStyles['package-grant-header']}>
        <Alert
          type="warning"
          content="修改权限包会立即影响所有绑定该权限包的普通租户；平台租户无需配置权限边界。"
        />
        <div className={packageStyles['package-summary']}>
          <Tag color="arcoblue">权限数：{selectedCount}</Tag>
          <Tag color="green">绑定租户：{record?.tenantCount ?? 0}</Tag>
          <Text type="secondary">
            普通租户管理员将自动拥有有效边界内全部权限。
          </Text>
        </div>
      </div>
      <Spin loading={loadingMenu} block className={roleStyles['grant-spin']}>
        <div className={roleStyles['grant-layout']}>
          <div className={roleStyles['grant-panel-left']}>
            <Text className={roleStyles['grant-panel-title']}>
              菜单权限
              <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>
                （CATALOG 为目录，无需勾选；授权子菜单后目录会自动展示）
              </Text>
            </Text>
            <div className={roleStyles['grant-panel-body']}>
              <Tree
                checkable
                checkStrictly
                checkedKeys={treeCheckedKeys}
                selectedKeys={selectedMenuKey ? [selectedMenuKey] : []}
                onCheck={handleMenuCheck}
                onSelect={(keys) => {
                  const key = keys[0] ? String(keys[0]) : '';
                  setSelectedMenuKey(key);
                }}
                treeData={toMenuTreeData(menuTree)}
              />
            </div>
          </div>
          <div className={roleStyles['grant-panel-right']}>
            <Text className={roleStyles['grant-panel-title']}>
              附属权限点
              {selectedMenuKey && !menuChecked ? (
                <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>
                  （勾选附属权限后将自动勾选左侧菜单）
                </Text>
              ) : null}
            </Text>
            <div className={roleStyles['grant-panel-body']}>
              <Spin loading={loadingChildren} style={{ width: '100%' }}>
                {!selectedMenuKey ? (
                  <Empty description="请在左侧选择菜单" />
                ) : childNodes.length === 0 && !loadingChildren ? (
                  <Empty description="该菜单未配置附属权限，表示不需要其他 API/元素权限；若需要请在权限关系管理页添加" />
                ) : (
                  <Checkbox.Group {...childCheckboxGroupProps}>
                    {renderGrantModeSection(
                      '手动授权',
                      grantBuckets.manual,
                      'manual'
                    )}
                    {renderGrantModeSection(
                      '自动授权',
                      grantBuckets.auto,
                      'auto'
                    )}
                  </Checkbox.Group>
                )}
              </Spin>
            </div>
          </div>
        </div>
      </Spin>
    </Drawer>
  );
}
