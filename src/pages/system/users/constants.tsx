import React from 'react';
import {
  Badge,
  Button,
  Dropdown,
  Menu,
  Space,
  Tag as ArcoTag,
  Tooltip,
  Typography,
} from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconLock,
  IconMore,
  IconSafe,
  IconUnlock,
  IconUserGroup,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { UserRecord } from '@/api/access-user';
import {
  FieldPolicyMap,
  getFieldPolicy,
  isFieldHidden,
  isFieldSortable,
  maskValue,
  statusText,
  formatTime,
} from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Text } = Typography;

const renderEllipsisWithTooltip = (value?: React.ReactNode) => {
  const text = value || '—';
  return (
    <Tooltip content={text} disabled={!value}>
      <Text className={styles['table-cell-ellipsis']}>{text}</Text>
    </Tooltip>
  );
};

const renderCopyableEllipsis = (value?: string) => {
  const text = value || '—';
  if (!value) return text;
  return (
    <Tooltip content={text}>
      <Text copyable className={styles['table-cell-ellipsis']}>
        {text}
      </Text>
    </Tooltip>
  );
};

const renderTagList = <T extends { key: React.Key; label?: React.ReactNode }>(
  items: T[]
) => {
  const validItems = items.filter((item) => item.label);
  if (!validItems.length) return '—';
  const tooltip = validItems.map((item) => item.label).join('、');
  return (
    <Tooltip content={tooltip}>
      <div className={styles['tag-list']}>
        {validItems.map((item) => (
          <ArcoTag key={item.key}>{item.label}</ArcoTag>
        ))}
      </div>
    </Tooltip>
  );
};

export type UserCallbacks = {
  onEdit: (record: UserRecord) => void;
  onDelete: (record: UserRecord) => void;
  onStatus: (record: UserRecord, activeStatus: number) => void;
  onRoles: (record: UserRecord) => void;
  onDepts: (record: UserRecord) => void;
  onPermissions: (record: UserRecord) => void;
};

type UserActionItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
  visible?: boolean;
  onClick: () => void;
};

function statusBadge(value?: number) {
  const text = statusText(value);
  if (value === 1) return <Badge status="success" text={text} />;
  if (value === 2 || value === 4) return <Badge status="error" text={text} />;
  if (value === 3) return <Badge status="warning" text={text} />;
  return <Badge status="default" text={text} />;
}

export function getColumns(
  callbacks: UserCallbacks,
  fieldPolicies?: FieldPolicyMap
): ColumnProps<UserRecord>[] {
  const emailPolicy = getFieldPolicy(
    fieldPolicies,
    'system.users.list',
    'email'
  );
  const mobilePolicy = getFieldPolicy(
    fieldPolicies,
    'system.users.list',
    'mobile'
  );
  const columns: ColumnProps<UserRecord>[] = [
    { title: 'ID', dataIndex: 'id', width: 72 },
    {
      title: '用户名',
      dataIndex: 'username',
      width: 160,
      render: renderCopyableEllipsis,
    },
    {
      title: '姓名',
      dataIndex: 'realname',
      width: 120,
      render: renderEllipsisWithTooltip,
    },
  ];

  if (!isFieldHidden(mobilePolicy)) {
    columns.push({
      title: '手机号',
      dataIndex: 'mobile',
      width: 140,
      sorter: isFieldSortable(mobilePolicy),
      render: (v) => renderEllipsisWithTooltip(maskValue(v, mobilePolicy)),
    });
  }
  if (!isFieldHidden(emailPolicy)) {
    columns.push({
      title: '邮箱',
      dataIndex: 'email',
      width: 220,
      sorter: isFieldSortable(emailPolicy),
      render: (v) => renderEllipsisWithTooltip(maskValue(v, emailPolicy)),
    });
  }

  columns.push(
    {
      title: '状态',
      dataIndex: 'activeStatus',
      width: 100,
      render: statusBadge,
    },
    {
      title: '角色',
      dataIndex: 'user_roles',
      width: 200,
      render: (_, record) =>
        renderTagList(
          (record.user_roles || []).map((r) => ({
            key: r.roleId,
            label: r.roleName,
          }))
        ),
    },
    {
      title: '部门',
      dataIndex: 'user_depts',
      width: 200,
      render: (_, record) =>
        renderTagList(
          (record.user_depts || []).map((d) => ({
            key: d.deptId,
            label: d.deptName,
          }))
        ),
    },
    { title: '最近登录', dataIndex: 'loginAt', width: 170, render: formatTime },
    {
      title: '操作',
      dataIndex: 'operations',
      width: 286,
      fixed: 'right',
      render: (_, record) => {
        const nextActiveStatus = record.activeStatus === 1 ? 2 : 1;
        const actionItems: UserActionItem[] = [
          {
            key: 'edit',
            label: '编辑',
            icon: <IconEdit />,
            onClick: () => callbacks.onEdit(record),
          },
          {
            key: 'roles',
            label: '角色',
            icon: <IconUserGroup />,
            onClick: () => callbacks.onRoles(record),
          },
          {
            key: 'depts',
            label: '部门',
            icon: <IconSafe />,
            onClick: () => callbacks.onDepts(record),
          },
          {
            key: 'permissions',
            label: '授权',
            icon: <IconSafe />,
            onClick: () => callbacks.onPermissions(record),
          },
          {
            key: 'status',
            label: record.activeStatus === 1 ? '禁用' : '启用',
            icon: record.activeStatus === 1 ? <IconLock /> : <IconUnlock />,
            onClick: () => callbacks.onStatus(record, nextActiveStatus),
          },
          {
            key: 'delete',
            label: '删除',
            icon: <IconDelete />,
            danger: true,
            onClick: () => callbacks.onDelete(record),
          },
        ];
        const actions = actionItems.filter((item) => item.visible !== false);
        const primaryActions =
          actions.length > 4 ? actions.slice(0, 3) : actions;
        const moreActions = actions.length > 4 ? actions.slice(3) : [];
        const moreMenu = moreActions.length ? (
          <Menu
            onClickMenuItem={(key) => {
              moreActions.find((item) => item.key === key)?.onClick();
            }}
          >
            {moreActions.map((item) => (
              <Menu.Item
                key={item.key}
                className={item.danger ? styles['danger-menu-item'] : undefined}
              >
                {item.icon}
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        ) : null;

        return (
          <Space className={styles.operations} size={8}>
            {primaryActions.map((item) => (
              <Button
                key={item.key}
                type="text"
                size="small"
                icon={item.icon}
                status={item.danger ? 'danger' : undefined}
                onClick={item.onClick}
              >
                {item.label}
              </Button>
            ))}
            {moreMenu ? (
              <Dropdown droplist={moreMenu} position="br">
                <Button type="text" size="small" icon={<IconMore />}>
                  更多
                </Button>
              </Dropdown>
            ) : null}
          </Space>
        );
      },
    }
  );
  return columns;
}
