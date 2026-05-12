export function formatEpochMs(ms?: number | null): string {
  if (ms == null || ms <= 0) {
    return '—';
  }
  try {
    return new Date(Number(ms)).toLocaleString();
  } catch {
    return String(ms);
  }
}

export function activeStatusLabel(
  t: Record<string, string>,
  v?: number | null
): string {
  if (v === 1) {
    return t['appSearch.activeStatus.enabled'];
  }
  if (v === 2) {
    return t['appSearch.activeStatus.disabled'];
  }
  return '—';
}

export function dataStatusLabel(
  t: Record<string, string>,
  v?: number | null
): string {
  if (v === 1) {
    return t['appSearch.dataStatus.normal'];
  }
  if (v === 2) {
    return t['appSearch.dataStatus.deleted'];
  }
  return '—';
}

export function osTypeLabel(
  t: Record<string, string>,
  v?: string | null
): string {
  const x = (v || '').toLowerCase();
  if (x === 'android') {
    return t['appSearch.os.android'];
  }
  if (x === 'ios') {
    return t['appSearch.os.ios'];
  }
  return v || '—';
}
