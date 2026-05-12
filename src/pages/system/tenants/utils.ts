import type { TenantRecord } from '@/api/tenant';

export function parseEncryptionKey(config: unknown): string {
  if (config == null) {
    return '';
  }
  if (typeof config === 'object' && !Array.isArray(config)) {
    const v = (config as Record<string, unknown>).encryption_key;
    return typeof v === 'string' ? v : '';
  }
  if (typeof config !== 'string' || !config.trim()) {
    return '';
  }
  try {
    const o = JSON.parse(config) as Record<string, unknown>;
    const v = o.encryption_key;
    return typeof v === 'string' ? v : '';
  } catch {
    return '';
  }
}

export function tenantTypeToBusinessType(tenantType: string): number {
  const t = (tenantType || '').toUpperCase();
  if (t === 'PLATFORM') {
    return 1;
  }
  return 2;
}

export function businessTypeLabel(
  t: Record<string, string>,
  v: number
): string {
  if (v === 1) {
    return t['tenantSearch.businessType.system'] || '系统';
  }
  if (v === 2) {
    return t['tenantSearch.businessType.ops'] || '运营';
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
  const c = record.config;
  if (typeof c === 'string') {
    return c;
  }
  try {
    return JSON.stringify(c);
  } catch {
    return '';
  }
}
