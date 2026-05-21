import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Button,
  Card,
  Descriptions,
  Form,
  Input,
  Message,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Tree,
  TreeSelect,
  Typography,
} from '@arco-design/web-react';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import * as ArcoIcons from '@arco-design/web-react/icon';
import {
  IconDelete,
  IconEdit,
  IconEye,
  IconPlayArrow,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconStop,
} from '@arco-design/web-react/icon';
import {
  createMenu,
  createPageElement,
  deleteMenu,
  deletePageElement,
  fetchMenuTree,
  fetchPageElements,
  MenuRecord,
  PageElementRecord,
  toggleMenuActiveStatus,
  togglePageElementActiveStatus,
  updateMenu,
  updatePageElement,
} from '@/api/access-permission';
import { getIconComponentName } from '@/utils/routeIcon';
import styles from './style/index.module.less';

const { Title, Text } = Typography;

const MENU_TYPES = ['CATALOG', 'MENU'];
const ROOT_PARENT_ID = 0;

const menuTypeOptions = [
  { label: '目录', value: 'CATALOG' },
  { label: '菜单', value: 'MENU' },
];

const elementTypeOptions = [
  { label: '按钮', value: 'BUTTON' },
  { label: '交互组件', value: 'FORM' },
  { label: '标签页', value: 'TAB' },
  { label: '数据列', value: 'COLUMN' },
];

const statusOptions = [
  { label: '启用', value: 1 },
  { label: '停用', value: 2 },
];

const visibleOptions = [
  { label: '显示', value: 1 },
  { label: '隐藏', value: 2 },
];

const iconNames = Object.keys(ArcoIcons)
  .filter((key) => key.startsWith('Icon'))
  .sort();

function isMenuNode(item?: MenuRecord | null) {
  return item ? MENU_TYPES.includes(item.menuType || 'MENU') : false;
}

function flattenMenus(nodes: MenuRecord[] = []): MenuRecord[] {
  return nodes.reduce<MenuRecord[]>((list, item) => {
    const { children, ...rest } = item;
    list.push({ ...rest, children });
    if (children?.length) {
      list.push(...flattenMenus(children));
    }
    return list;
  }, []);
}

function buildHierarchy(records: MenuRecord[] = []) {
  const map = new Map<number, MenuRecord>();
  const roots: MenuRecord[] = [];

  records.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  map.forEach((item) => {
    const parentId = item.parentId || ROOT_PARENT_ID;
    const parent = map.get(parentId);
    if (parent && parent.id !== item.id) {
      parent.children = [...(parent.children || []), item];
    } else {
      roots.push(item);
    }
  });

  return roots;
}

function getAllMenus(nodes: MenuRecord[] = []) {
  return buildHierarchy(flattenMenus(nodes));
}

function filterCatalogTree(nodes: MenuRecord[] = []): MenuRecord[] {
  return nodes
    .filter((item) => item.menuType === 'CATALOG')
    .map((item) => ({
      ...item,
      children: filterCatalogTree(item.children || []),
    }));
}

function findMenu(nodes: MenuRecord[] = [], id?: number): MenuRecord | null {
  for (const item of nodes) {
    if (item.id === id) return item;
    const child = findMenu(item.children || [], id);
    if (child) return child;
  }
  return null;
}

function findFirstMenuNode(nodes: MenuRecord[] = []): MenuRecord | null {
  for (const item of nodes) {
    if (isMenuNode(item)) return item;
    const child = findFirstMenuNode(item.children || []);
    if (child) return child;
  }
  return null;
}

function getDescendantIds(node?: MenuRecord | null) {
  const ids = new Set<number>();
  const walk = (children: MenuRecord[] = []) => {
    children.forEach((child) => {
      ids.add(child.id);
      walk(child.children || []);
    });
  };
  walk(node?.children || []);
  return ids;
}

function toParentTreeData(
  nodes: MenuRecord[] = [],
  disabledIds = new Set<number>()
) {
  return [
    {
      key: String(ROOT_PARENT_ID),
      value: String(ROOT_PARENT_ID),
      title: '根节点',
      children: undefined,
    },
    ...nodes.map((item) => ({
      key: String(item.id),
      value: String(item.id),
      title: `${item.menuName || item.menuCode || item.id}${
        item.menuCode ? `（${item.menuCode}）` : ''
      }`,
      disabled: disabledIds.has(item.id),
      children: toParentTreeData(item.children || [], disabledIds).slice(1),
    })),
  ];
}

function normalizeParentId(parentId?: number | string | null) {
  const value = Number(parentId ?? ROOT_PARENT_ID);
  return Number.isFinite(value) ? value : ROOT_PARENT_ID;
}

function getParentFieldValue(parentId?: number | null) {
  return String(parentId ?? ROOT_PARENT_ID);
}

function normalizeIconValue(icon?: string) {
  const iconName = getIconComponentName(icon);
  return iconName && iconNames.includes(iconName) ? iconName : undefined;
}

function renderMenuTypeTag(type?: string) {
  return (
    <Tag
      className={type === 'CATALOG' ? styles['catalog-tag'] : undefined}
      color={type === 'MENU' ? 'arcoblue' : undefined}
    >
      {type === 'CATALOG' ? '目录' : '菜单'}
    </Tag>
  );
}

function renderIcon(icon?: string) {
  const iconName = normalizeIconValue(icon);
  const IconComponent = iconName
    ? (ArcoIcons[iconName] as React.ComponentType<{ className?: string }>)
    : null;
  return IconComponent ? (
    <IconComponent className={styles['icon-preview']} />
  ) : null;
}

function getMenuCodePrefix(
  nodes: MenuRecord[],
  parentId?: number,
  menuType?: string
) {
  if (!parentId || parentId === ROOT_PARENT_ID) {
    if (menuType === 'CATALOG') return 'catalog';
    if (menuType === 'MENU') return 'menu';
    return '';
  }

  const parentCode = findMenu(nodes, parentId)?.menuCode || '';
  if (!parentCode || !menuType) return '';
  if (menuType === 'MENU') {
    return parentCode.replace(/^catalog(?=:|$)/, 'menu');
  }
  return parentCode;
}

function splitMenuCode(code?: string, parentCode?: string) {
  if (!code) return '';
  if (parentCode && code.startsWith(`${parentCode}:`)) {
    return code.slice(parentCode.length + 1);
  }
  if (parentCode && code.startsWith(`${parentCode}.`)) {
    return code.slice(parentCode.length + 1);
  }
  return code;
}

function joinMenuCode(parentCode: string, codeSuffix: string) {
  const suffix = codeSuffix.trim();
  return parentCode ? `${parentCode}:${suffix}` : suffix;
}

function getElementCodePrefix(parentMenuCode = '', elementType?: string) {
  return parentMenuCode && elementType
    ? `${parentMenuCode}:${elementType.toLowerCase()}`
    : '';
}

function joinElementCode(
  parentMenuCode: string,
  elementType: string,
  codeSuffix: string
) {
  const prefix = getElementCodePrefix(parentMenuCode, elementType);
  const suffix = codeSuffix.trim();
  return prefix ? `${prefix}:${suffix}` : suffix;
}

function formatType(type?: string) {
  if (type === 'CATALOG') return '目录';
  if (type === 'MENU') return '菜单';
  if (type === 'BUTTON') return '按钮';
  if (type === 'ELEMENT' || type === 'DOM') return '页面元素';
  if (type === 'API') return 'API 接口';
  return type || '-';
}

function parseMenuConfig(config?: unknown): Record<string, unknown> {
  if (!config) return {};
  if (typeof config === 'string') {
    try {
      const parsed = JSON.parse(config);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed
        : {};
    } catch {
      return {};
    }
  }
  return typeof config === 'object' && !Array.isArray(config)
    ? (config as Record<string, unknown>)
    : {};
}

function toText(value: unknown) {
  return typeof value === 'string' ? value : '';
}

function getMenuLabels(record?: MenuRecord | null) {
  const config = parseMenuConfig(record?.config);
  return {
    label_zh: toText(config.label_zh) || record?.menuName || '',
    label_en: toText(config.label_en),
    label_es: toText(config.label_es),
  };
}

function buildMenuConfig(
  record: MenuRecord | null | undefined,
  values: Record<string, unknown>
) {
  return JSON.stringify({
    ...parseMenuConfig(record?.config),
    label_en: toText(values.label_en).trim(),
    label_es: toText(values.label_es).trim(),
    label_zh: toText(values.label_zh).trim(),
  });
}

export default function MenuManagePage() {
  const [menuForm] = Form.useForm();
  const [elementForm] = Form.useForm();
  const [elementSearchForm] = Form.useForm();
  const [tree, setTree] = useState<MenuRecord[]>([]);
  const [selectedId, setSelectedId] = useState<number>();
  const [menuVisible, setMenuVisible] = useState(false);
  const [elementVisible, setElementVisible] = useState(false);
  const [viewElement, setViewElement] = useState<PageElementRecord | null>(
    null
  );
  const [menuMode, setMenuMode] = useState<'create' | 'edit'>('create');
  const [elementMode, setElementMode] = useState<'create' | 'edit'>('create');
  const [editingElement, setEditingElement] =
    useState<PageElementRecord | null>(null);
  const [pageElements, setPageElements] = useState<PageElementRecord[]>([]);
  const [elementSearch, setElementSearch] = useState<{
    elementCode?: string;
    elementType?: string;
    activeStatus?: number;
  }>({});

  const allTree = useMemo(() => getAllMenus(tree), [tree]);
  const catalogTree = useMemo(() => filterCatalogTree(allTree), [allTree]);
  const selected = findMenu(allTree, selectedId);
  const selectedMenuNode = isMenuNode(selected) ? selected : null;
  const menuParentId = Form.useWatch('parentId', menuForm);
  const normalizedMenuParentId = normalizeParentId(menuParentId);
  const menuType = Form.useWatch('menuType', menuForm);
  const hasMenuParent = menuParentId !== undefined && menuParentId !== null;
  const filteredPageElements = useMemo(() => pageElements, [pageElements]);
  const disabledParentIds = useMemo(() => {
    const ids = getDescendantIds(menuMode === 'edit' ? selected : null);
    if (menuMode === 'edit' && selected?.id) {
      ids.add(selected.id);
    }
    return ids;
  }, [menuMode, selected]);
  const parentTreeData = useMemo(
    () => toParentTreeData(catalogTree, disabledParentIds),
    [catalogTree, disabledParentIds]
  );
  const currentMenuCodePrefix = getMenuCodePrefix(
    allTree,
    normalizedMenuParentId,
    menuType
  );
  const elementType = Form.useWatch('elementType', elementForm);
  const elementCodePrefix = getElementCodePrefix(
    selectedMenuNode?.menuCode || '',
    elementType
  );

  const updateMenuActiveStatus = (record: MenuRecord) => {
    const isDisabled = record.activeStatus === 2;
    Modal.confirm({
      title: `${isDisabled ? '启用' : '停用'}菜单`,
      content: `确认${isDisabled ? '启用' : '停用'}菜单 ${
        record.menuName || record.menuCode
      }？`,
      onOk: async () => {
        await toggleMenuActiveStatus(record.id, isDisabled ? 1 : 2);
        Message.success(`菜单已${isDisabled ? '启用' : '停用'}`);
        await loadTree();
      },
    });
  };

  const updateElementActiveStatus = (record: PageElementRecord) => {
    const isDisabled = record.activeStatus === 2;
    Modal.confirm({
      title: `${isDisabled ? '启用' : '停用'}页面元素`,
      content: `确认${isDisabled ? '启用' : '停用'}页面元素 ${
        record.elementName || record.elementCode
      }？`,
      onOk: async () => {
        await togglePageElementActiveStatus(record.id, isDisabled ? 1 : 2);
        Message.success(`页面元素已${isDisabled ? '启用' : '停用'}`);
        await loadPageElements();
      },
    });
  };

  const renderTreeTitle = (item: MenuRecord) => {
    const isDisabled = item.activeStatus === 2;

    return (
      <div
        className={`${styles['tree-node-title']} ${
          isDisabled ? styles['tree-node-disabled'] : ''
        }`}
      >
        <div className={styles['tree-node-content']}>
          {renderMenuTypeTag(item.menuType)}
          {item.icon ? renderIcon(item.icon) : null}
          <span className={styles['tree-node-name']}>
            {item.menuName || item.menuCode || String(item.id)}
          </span>
          {item.visible === 2 ? (
            <Tag className={styles['hidden-tag']} size="small">
              隐藏
            </Tag>
          ) : null}
        </div>
        <div
          className={styles['tree-node-actions']}
          onClick={(event) => event.stopPropagation()}
        >
          <Button
            type="text"
            size="mini"
            className={!isDisabled ? styles['stop-menu-button'] : undefined}
            status={isDisabled ? 'success' : undefined}
            icon={isDisabled ? <IconPlayArrow /> : <IconStop />}
            onClick={() => updateMenuActiveStatus(item)}
          >
            {isDisabled ? '启用' : '停用'}
          </Button>
          <Button
            type="text"
            size="mini"
            icon={<IconEdit />}
            onClick={() => openEditMenu(item)}
          >
            编辑
          </Button>
          <Button
            type="text"
            size="mini"
            status="danger"
            icon={<IconDelete />}
            onClick={() =>
              Modal.confirm({
                title: '删除菜单',
                content: `确认删除菜单 ${item.menuName || item.menuCode}？`,
                onOk: async () => {
                  await deleteMenu(item.id);
                  Message.success('菜单已删除');
                  if (selectedId === item.id) {
                    setSelectedId(undefined);
                  }
                  await loadTree();
                },
              })
            }
          >
            删除
          </Button>
        </div>
      </div>
    );
  };

  const toTreeData = (nodes: MenuRecord[] = []) =>
    nodes.map((item) => ({
      key: String(item.id),
      value: item.id,
      title: renderTreeTitle(item),
      children: toTreeData(item.children || []),
    }));

  const loadTree = async (autoSelectFirst = false) => {
    const data = await fetchMenuTree();
    const nextTree = data || [];
    setTree(nextTree);
    if (autoSelectFirst) {
      const firstMenu = findFirstMenuNode(nextTree);
      setSelectedId(firstMenu?.id);
    }
  };

  const loadPageElements = useCallback(async () => {
    if (!selectedMenuNode?.id || selectedMenuNode.menuType !== 'MENU') {
      setPageElements([]);
      return;
    }
    const data = await fetchPageElements({
      menuId: selectedMenuNode.id,
      ...elementSearch,
    });
    setPageElements(data || []);
  }, [selectedMenuNode?.id, selectedMenuNode?.menuType, elementSearch]);

  useEffect(() => {
    void loadTree(true);
  }, []);

  useEffect(() => {
    void loadPageElements();
  }, [loadPageElements]);

  const openCreateMenu = () => {
    const parentId =
      selectedMenuNode?.menuType === 'CATALOG'
        ? selectedMenuNode.id
        : ROOT_PARENT_ID;
    const defaultMenuType = 'MENU';
    setMenuMode('create');
    menuForm.resetFields();
    menuForm.setFieldsValue({
      parentId: getParentFieldValue(parentId),
      codeSuffix: '',
      menuName: '',
      label_zh: '',
      label_en: '',
      label_es: '',
      menuType: defaultMenuType,
      visible: 1,
      sortOrder: 100,
    });
    setMenuVisible(true);
  };

  const openEditMenu = (record = selectedMenuNode) => {
    if (!record) return;
    setSelectedId(record.id);
    const nextParentId = normalizeParentId(record.parentId);
    const codePrefix = getMenuCodePrefix(
      allTree,
      nextParentId,
      record.menuType
    );
    setMenuMode('edit');
    menuForm.resetFields();
    const labels = getMenuLabels(record);
    menuForm.setFieldsValue({
      ...record,
      ...labels,
      parentId: getParentFieldValue(nextParentId),
      codeSuffix: splitMenuCode(record.menuCode, codePrefix),
      icon: normalizeIconValue(record.icon),
      activeStatus: undefined,
    });
    setMenuVisible(true);
  };

  const handleMenuParentChange = () => {
    menuForm.setFieldValue('codeSuffix', '');
  };

  const handleMenuTypeChange = () => {
    menuForm.setFieldValue('codeSuffix', '');
  };

  const openCreateElement = () => {
    if (!selectedMenuNode) return;
    setElementMode('create');
    setEditingElement(null);
    elementForm.resetFields();
    elementForm.setFieldsValue({
      menuId: selectedMenuNode.id,
      codeSuffix: '',
      elementType: undefined,
      elementName: '',
      sortOrder: 100,
    });
    setElementVisible(true);
  };

  const openEditElement = (record: PageElementRecord) => {
    setElementMode('edit');
    setEditingElement(record);
    elementForm.resetFields();
    const elementPrefix = getElementCodePrefix(
      selectedMenuNode?.menuCode || '',
      record.elementType
    );
    elementForm.setFieldsValue({
      ...record,
      codeSuffix: splitMenuCode(record.elementCode, elementPrefix),
    });
    setElementVisible(true);
  };

  const submitMenu = async () => {
    const values = await menuForm.validate();
    const currentRecord = menuMode === 'edit' ? selectedMenuNode : null;
    const parentId = normalizeParentId(values.parentId);
    const codePrefix = getMenuCodePrefix(allTree, parentId, values.menuType);
    const payload = {
      ...values,
      parentId,
      menuName: toText(values.label_zh).trim(),
      menuCode: joinMenuCode(codePrefix, values.codeSuffix),
      routePath: toText(values.routePath).trim(),
      componentPath: toText(values.componentPath).trim(),
      icon: normalizeIconValue(values.icon) || '',
      visible: Number(values.visible ?? 1),
      sortOrder: Number(values.sortOrder ?? 100),
      config: buildMenuConfig(currentRecord, values),
    };
    delete payload.codeSuffix;
    delete payload.label_zh;
    delete payload.label_en;
    delete payload.label_es;

    if (menuMode === 'create') {
      await createMenu(payload);
      Message.success('菜单已新增');
    } else if (selectedMenuNode) {
      await updateMenu({ ...payload, id: selectedMenuNode.id });
      Message.success('菜单已更新');
    }
    setMenuVisible(false);
    await loadTree();
  };

  const submitElement = async () => {
    if (!selectedMenuNode) return;
    const values = await elementForm.validate();
    const payload = {
      ...values,
      menuId: selectedMenuNode.id,
      elementCode: joinElementCode(
        selectedMenuNode.menuCode || '',
        values.elementType,
        values.codeSuffix
      ),
      activeStatus: editingElement?.activeStatus,
      sortOrder: editingElement?.sortOrder || values.sortOrder || 100,
    };
    delete payload.codeSuffix;

    if (elementMode === 'create') {
      await createPageElement(payload);
      Message.success('页面元素已新增');
    } else if (editingElement) {
      await updatePageElement({ ...payload, id: editingElement.id });
      Message.success('页面元素已更新');
    }
    setElementVisible(false);
    await loadPageElements();
  };

  const handleElementSearch = () => {
    const values = elementSearchForm.getFieldsValue();
    setElementSearch(values);
  };

  const resetElementSearch = () => {
    elementSearchForm.resetFields();
    setElementSearch({});
  };

  const elementColumns: ColumnProps<PageElementRecord>[] = [
    { title: '元素名称', dataIndex: 'elementName', width: 160 },
    { title: '元素编码', dataIndex: 'elementCode', width: 260 },
    {
      title: '类型',
      dataIndex: 'elementType',
      width: 110,
      render: (value) => <Tag>{formatType(value)}</Tag>,
    },
    {
      title: '启用状态',
      dataIndex: 'activeStatus',
      width: 110,
      render: (value) =>
        value === 2 ? (
          <Tag color="red">停用</Tag>
        ) : (
          <Tag color="green">启用</Tag>
        ),
    },
    {
      title: '操作',
      dataIndex: 'operations',
      width: 280,
      fixed: 'right',
      render: (_, record) => {
        const isDisabled = record.activeStatus === 2;
        return (
          <Space className={styles.operations} size={10} wrap>
            <Button
              type="text"
              size="small"
              className={!isDisabled ? styles['stop-menu-button'] : undefined}
              status={isDisabled ? 'success' : undefined}
              icon={isDisabled ? <IconPlayArrow /> : <IconStop />}
              onClick={() => updateElementActiveStatus(record)}
            >
              {isDisabled ? '启用' : '停用'}
            </Button>
            <Button
              type="text"
              size="small"
              icon={<IconEye />}
              onClick={() => setViewElement(record)}
            >
              查看
            </Button>
            <Button
              type="text"
              size="small"
              icon={<IconEdit />}
              onClick={() => openEditElement(record)}
            >
              修改
            </Button>
            <Button
              type="text"
              status="danger"
              size="small"
              icon={<IconDelete />}
              onClick={() =>
                Modal.confirm({
                  title: '删除页面元素',
                  content: `确认删除 ${
                    record.elementName || record.elementCode
                  }？`,
                  onOk: async () => {
                    await deletePageElement(record.id);
                    Message.success('页面元素已删除');
                    await loadPageElements();
                  },
                })
              }
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Card>
      <Title heading={6}>菜单管理</Title>
      <div className={styles['button-group']}>
        <Space>
          <Button type="primary" icon={<IconPlus />} onClick={openCreateMenu}>
            新增菜单
          </Button>
        </Space>
        <Button icon={<IconRefresh />} onClick={() => loadTree()}>
          刷新
        </Button>
      </div>

      <div className={styles['page-layout']}>
        <div className={styles['tree-panel']}>
          <Tree
            blockNode
            treeData={toTreeData(allTree)}
            selectedKeys={selectedId ? [String(selectedId)] : []}
            onSelect={(keys) =>
              setSelectedId(keys[0] ? Number(keys[0]) : undefined)
            }
          />
        </div>
        <div className={styles['detail-panel']}>
          <Card title="资源信息">
            {selectedMenuNode ? (
              <div className={styles['resource-card-content']}>
                {selectedMenuNode.icon ? (
                  <div className={styles['resource-bg-icon']}>
                    {renderIcon(selectedMenuNode.icon)}
                  </div>
                ) : null}
                <div className={styles['resource-header']}>
                  <div className={styles['resource-title-wrap']}>
                    <div className={styles['resource-title-row']}>
                      <div className={styles['resource-title']}>
                        {selectedMenuNode.menuName || '-'}
                      </div>
                      {renderMenuTypeTag(selectedMenuNode.menuType)}
                    </div>
                    <div className={styles['resource-code-row']}>
                      {selectedMenuNode.menuCode ? (
                        <Text className={styles['resource-code']} copyable>
                          {selectedMenuNode.menuCode}
                        </Text>
                      ) : (
                        <span className={styles['resource-code']}>-</span>
                      )}
                    </div>
                  </div>
                </div>
                <Descriptions
                  className={styles['resource-descriptions']}
                  column={2}
                  data={(() => {
                    const labels = getMenuLabels(selectedMenuNode);
                    return [
                      { label: '中文名称', value: labels.label_zh || '-' },
                      {
                        label: '路由',
                        value: selectedMenuNode.routePath || '-',
                      },
                      { label: '英文名称', value: labels.label_en || '-' },
                      {
                        label: '组件路径',
                        value: selectedMenuNode.componentPath || '-',
                      },
                      { label: '西语名称', value: labels.label_es || '-' },
                      {
                        label: '可见状态',
                        value: selectedMenuNode.visible === 2 ? '隐藏' : '显示',
                      },
                      {
                        label: '启用状态',
                        value:
                          selectedMenuNode.activeStatus === 2 ? '禁用' : '启用',
                      },
                      {
                        label: '排序',
                        value: selectedMenuNode.sortOrder ?? '-',
                      },
                    ];
                  })()}
                />
              </div>
            ) : (
              '请选择左侧目录或菜单节点'
            )}
          </Card>

          <Card title="页面元素" className={styles['element-card']}>
            <div className={styles['element-toolbar']}>
              <Form
                form={elementSearchForm}
                className={styles['element-search-form']}
                layout="inline"
                onSubmit={handleElementSearch}
              >
                <Form.Item label="元素编码" field="elementCode">
                  <Input allowClear placeholder="请输入元素编码" />
                </Form.Item>
                <Form.Item label="元素类型" field="elementType">
                  <Select
                    allowClear
                    options={elementTypeOptions}
                    placeholder="请选择元素类型"
                  />
                </Form.Item>
                <Form.Item label="启用状态" field="activeStatus">
                  <Select
                    allowClear
                    options={statusOptions}
                    placeholder="请选择启用状态"
                  />
                </Form.Item>
                <Form.Item className={styles['element-search-actions']}>
                  <Space>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<IconSearch />}
                    >
                      查询
                    </Button>
                    <Button icon={<IconRefresh />} onClick={resetElementSearch}>
                      重置
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
              {selectedMenuNode?.menuType === 'MENU' ? (
                <Button
                  type="primary"
                  icon={<IconPlus />}
                  onClick={openCreateElement}
                >
                  添加元素
                </Button>
              ) : null}
            </div>
            <Table
              rowKey="id"
              columns={elementColumns}
              data={filteredPageElements}
              pagination={false}
              scroll={{ x: 860 }}
            />
          </Card>
        </div>
      </div>

      <Modal
        title={menuMode === 'create' ? '新增菜单' : '编辑菜单'}
        visible={menuVisible}
        onOk={submitMenu}
        onCancel={() => setMenuVisible(false)}
        unmountOnExit
        style={{ width: 880 }}
        className={styles['menu-modal']}
      >
        <Form
          form={menuForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
        >
          <div className={styles['menu-modal-form-grid']}>
            <Form.Item
              label="父菜单"
              field="parentId"
              rules={[{ required: true }]}
            >
              <TreeSelect
                treeData={parentTreeData}
                placeholder="请选择父菜单"
                allowClear={false}
                onChange={handleMenuParentChange}
              />
            </Form.Item>
            <Form.Item
              label="菜单类型"
              field="menuType"
              rules={[{ required: true }]}
            >
              <Select
                options={menuTypeOptions}
                onChange={handleMenuTypeChange}
              />
            </Form.Item>
            <Form.Item label="菜单编码" required>
              <Input.Group compact className={styles['code-input-group']}>
                {currentMenuCodePrefix ? (
                  <Input
                    value={`${currentMenuCodePrefix}:`}
                    disabled
                    className={styles['code-prefix']}
                  />
                ) : null}
                <Form.Item
                  field="codeSuffix"
                  noStyle
                  rules={[{ required: true, message: '请输入菜单编码' }]}
                >
                  <Input
                    className={styles['code-suffix']}
                    disabled={!hasMenuParent || !menuType}
                    placeholder={
                      hasMenuParent && menuType
                        ? '请输入无前缀编码'
                        : '请先选择父菜单和菜单类型'
                    }
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item
              label="中文名称"
              field="label_zh"
              rules={[{ required: true, message: '请输入中文名称' }]}
            >
              <Input placeholder="如 系统管理" />
            </Form.Item>
            <Form.Item
              label="英文名称"
              field="label_en"
              rules={[{ required: true, message: '请输入英文名称' }]}
            >
              <Input placeholder="如 System" />
            </Form.Item>
            <Form.Item
              label="西语名称"
              field="label_es"
              rules={[{ required: true, message: '请输入西语名称' }]}
            >
              <Input placeholder="如 Sistema" />
            </Form.Item>
            <Form.Item label="路由路径" field="routePath">
              <Input placeholder="菜单类型为菜单时填写" />
            </Form.Item>
            <Form.Item label="组件路径" field="componentPath">
              <Input placeholder="如 system/menus" />
            </Form.Item>
            <Form.Item label="图标" field="icon">
              <Select
                showSearch
                allowClear
                placeholder="请选择图标"
                filterOption={(inputValue, option) =>
                  String(option.props.value)
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                }
              >
                {iconNames.map((name) => (
                  <Select.Option key={name} value={name}>
                    <Space>
                      {renderIcon(name)}
                      <span>{name}</span>
                    </Space>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="排序" field="sortOrder">
              <Input type="number" />
            </Form.Item>
            <Form.Item label="是否显示" field="visible">
              <Select options={visibleOptions} />
            </Form.Item>
          </div>
        </Form>
      </Modal>

      <Modal
        title={elementMode === 'create' ? '新增页面元素' : '修改页面元素'}
        visible={elementVisible}
        onOk={submitElement}
        onCancel={() => setElementVisible(false)}
        unmountOnExit
      >
        <Form
          form={elementForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Form.Item label="父菜单">
            <Input value={selectedMenuNode?.menuName || ''} disabled />
          </Form.Item>
          <Form.Item
            label="元素类型"
            field="elementType"
            rules={[{ required: true }]}
          >
            <Select options={elementTypeOptions} placeholder="请选择元素类型" />
          </Form.Item>
          <Form.Item label="元素编码" required>
            <Input.Group compact className={styles['code-input-group']}>
              <Input
                value={elementCodePrefix ? `${elementCodePrefix}:` : ''}
                disabled
                className={styles['element-code-prefix']}
              />
              <Form.Item
                field="codeSuffix"
                noStyle
                rules={[{ required: true, message: '请输入元素编码' }]}
              >
                <Input
                  className={styles['code-suffix']}
                  disabled={!elementType}
                  placeholder={
                    elementType ? '请输入资源编码' : '请先选择元素类型'
                  }
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            label="元素名称"
            field="elementName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          {elementType === 'COLUMN' ? (
            <Form.Item
              label="字段名称"
              field="elementKey"
              rules={[{ required: true, message: '请输入字段名称' }]}
            >
              <Input placeholder="请输入字段名称" />
            </Form.Item>
          ) : null}
        </Form>
      </Modal>

      <Modal
        title="页面元素详情"
        visible={!!viewElement}
        footer={null}
        onCancel={() => setViewElement(null)}
        unmountOnExit
      >
        <Descriptions
          column={1}
          data={[
            { label: '元素名称', value: viewElement?.elementName || '-' },
            { label: '元素编码', value: viewElement?.elementCode || '-' },
            { label: '元素类型', value: formatType(viewElement?.elementType) },
            {
              label: '启用状态',
              value: viewElement?.activeStatus === 2 ? '停用' : '启用',
            },
          ]}
        />
      </Modal>
    </Card>
  );
}
