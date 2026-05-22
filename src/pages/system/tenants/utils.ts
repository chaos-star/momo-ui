import type { TenantRecord } from '@/api/tenant';

export type TenantConfig = Record<string, unknown>;

export type TenantNameLabels = {
  label_zh: string;
  label_en: string;
  label_es: string;
};

export function parseTenantConfig(config: unknown): TenantConfig {
  if (config == null) {
    return {};
  }
  if (typeof config === 'object' && !Array.isArray(config)) {
    return config as TenantConfig;
  }
  if (typeof config !== 'string' || !config.trim()) {
    return {};
  }
  try {
    const parsed = JSON.parse(config) as unknown;
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
      ? (parsed as TenantConfig)
      : {};
  } catch {
    return {};
  }
}

function toText(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export function parseEncryptionKey(config: unknown): string {
  const v = parseTenantConfig(config).encryption_key;
  return typeof v === 'string' ? v : '';
}

export function getTenantNameLabels(
  record?: TenantRecord | null
): TenantNameLabels {
  const config = parseTenantConfig(record?.config);
  return {
    label_zh: toText(config.label_zh) || record?.tenantName || '',
    label_en: toText(config.label_en),
    label_es: toText(config.label_es),
  };
}

export function buildTenantConfig(
  record: TenantRecord | null | undefined,
  values: Record<string, unknown>,
  eventSecret?: string
): string {
  return JSON.stringify({
    ...parseTenantConfig(record?.config),
    label_zh: toText(values.label_zh).trim(),
    label_en: toText(values.label_en).trim(),
    label_es: toText(values.label_es).trim(),
    ...(eventSecret != null ? { encryption_key: eventSecret } : {}),
  });
}

export function tenantTypeToBusinessType(tenantType: string): string {
  const t = (tenantType || '').toUpperCase();
  if (t === 'PLATFORM') {
    return 'PLATFORM';
  }
  return 'NORMAL';
}

export function businessTypeLabel(
  t: Record<string, string>,
  v: string
): string {
  if (v === 'PLATFORM') {
    return t['tenantSearch.businessType.system'] || '系统';
  }
  if (v === 'NORMAL') {
    return t['tenantSearch.businessType.business'] || '业务';
  }
  return '-';
}

export function dataStatusLabel(t: Record<string, string>, v: number): string {
  if (v === 1) {
    return t['tenantSearch.dataStatus.normal'] || '正常';
  }
  if (v === 2) {
    return t['tenantSearch.dataStatus.deleted'] || '删除';
  }
  return String(v);
}

export function activeStatusLabel(
  t: Record<string, string>,
  v: number
): string {
  if (v === 1) {
    return t['tenantSearch.activeStatus.enabled'] || '启用';
  }
  if (v === 2) {
    return t['tenantSearch.activeStatus.disabled'] || '禁用';
  }
  if (v === 3) {
    return t['tenantSearch.activeStatus.expired'] || '过期';
  }
  return String(v);
}

/** 列表/详情展示用本地时间 */
export function formatEpochMs(ms?: number | null): string {
  if (ms == null || ms <= 0) {
    return '—';
  }
  const d = new Date(ms);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(
    d.getHours()
  )}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

export function formatConfigPreview(record: TenantRecord): string {
  try {
    return JSON.stringify(parseTenantConfig(record.config));
  } catch {
    return '';
  }
}
