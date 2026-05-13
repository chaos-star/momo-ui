export type FieldPolicy = {
  fieldCode?: string;
  effect?: string;
  displayEffect?: string;
  searchEffect?: string;
  sortEffect?: string;
  editEffect?: string;
  exportEffect?: string;
  maskType?: string;
  maskPattern?: string;
  priority?: number;
  [key: string]: unknown;
};

export type FieldPolicyMap = Record<string, Record<string, FieldPolicy>>;

function normalizeEffect(value?: string) {
  return (value || '').trim().toUpperCase();
}

export function getFieldPolicy(
  policies: FieldPolicyMap | undefined,
  apiCode: string,
  fieldCode: string
) {
  return policies?.[apiCode]?.[fieldCode];
}

export function isFieldHidden(policy?: FieldPolicy) {
  return normalizeEffect(policy?.displayEffect || policy?.effect) === 'HIDDEN';
}

export function isFieldReadonly(policy?: FieldPolicy) {
  return normalizeEffect(policy?.editEffect || policy?.effect) === 'READONLY';
}

export function isFieldSearchable(policy?: FieldPolicy) {
  return (
    normalizeEffect(policy?.searchEffect || policy?.effect) !== 'NON_SEARCHABLE'
  );
}

export function isFieldSortable(policy?: FieldPolicy) {
  return (
    normalizeEffect(policy?.sortEffect || policy?.effect) !== 'NON_SORTABLE'
  );
}

export function isFieldExportable(policy?: FieldPolicy) {
  return (
    normalizeEffect(policy?.exportEffect || policy?.effect) !== 'NON_EXPORTABLE'
  );
}

export function maskValue(value: unknown, policy?: FieldPolicy) {
  if (value == null || value === '') {
    return '—';
  }
  const text = String(value);
  const effect = normalizeEffect(policy?.displayEffect || policy?.effect);
  if (effect !== 'MASKED') {
    return text;
  }
  const maskType = normalizeEffect(policy?.maskType);
  if (maskType === 'EMAIL') {
    return text.replace(/^(.).+(@.+)$/, '$1***$2');
  }
  if (maskType === 'MOBILE' || /^1\d{10}$/.test(text)) {
    return text.replace(/^(\d{3})\d+(\d{4})$/, '$1****$2');
  }
  if (text.length <= 2) {
    return '*'.repeat(text.length);
  }
  return `${text.slice(0, 1)}${'*'.repeat(
    Math.max(3, text.length - 2)
  )}${text.slice(-1)}`;
}

export function statusText(status?: number) {
  if (status === 1) return '启用';
  if (status === 2) return '禁用';
  if (status === 3) return '过期';
  if (status === 4) return '锁定';
  return '未知';
}

export function formatTime(value?: number) {
  if (!value) return '—';
  return new Date(value).toLocaleString();
}

type PermissionIdNode = {
  permissionId?: number;
  children?: PermissionIdNode[];
};

export function flattenPermissionIds(nodes: PermissionIdNode[] = []) {
  const ids: number[] = [];
  const walk = (items: PermissionIdNode[]) => {
    items.forEach((item) => {
      if (item.permissionId) ids.push(item.permissionId);
      if (item.children?.length) walk(item.children);
    });
  };
  walk(nodes);
  return ids;
}
