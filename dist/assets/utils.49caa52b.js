function a(t) {
  if (t == null) return '';
  if (typeof t == 'object' && !Array.isArray(t)) {
    const e = t.encryption_key;
    return typeof e == 'string' ? e : '';
  }
  if (typeof t != 'string' || !t.trim()) return '';
  try {
    const n = JSON.parse(t).encryption_key;
    return typeof n == 'string' ? n : '';
  } catch {
    return '';
  }
}
function u(t) {
  return (t || '').toUpperCase() === 'PLATFORM' ? 1 : 2;
}
function s(t, e) {
  return e === 1
    ? t['tenantSearch.businessType.system'] || '\u7CFB\u7EDF'
    : e === 2
    ? t['tenantSearch.businessType.ops'] || '\u8FD0\u8425'
    : '-';
}
function i(t, e) {
  return e === 1
    ? t['tenantSearch.dataStatus.normal'] || '\u6B63\u5E38'
    : e === 2
    ? t['tenantSearch.dataStatus.deleted'] || '\u5220\u9664'
    : String(e);
}
function o(t, e) {
  return e === 1
    ? t['tenantSearch.activeStatus.enabled'] || '\u542F\u7528'
    : e === 2
    ? t['tenantSearch.activeStatus.disabled'] || '\u7981\u7528'
    : e === 3
    ? t['tenantSearch.activeStatus.expired'] || '\u8FC7\u671F'
    : String(e);
}
function c(t) {
  if (t == null || t <= 0) return '\u2014';
  const e = new Date(t),
    n = (r) => String(r).padStart(2, '0');
  return `${e.getFullYear()}-${n(e.getMonth() + 1)}-${n(e.getDate())} ${n(
    e.getHours()
  )}:${n(e.getMinutes())}:${n(e.getSeconds())}`;
}
export { o as a, s as b, i as d, c as f, a as p, u as t };
