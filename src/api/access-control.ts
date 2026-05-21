import { authRequest, PageData } from './request';

export type Id = number | string;

export interface BaseEntity {
  id: number;
  activeStatus?: number;
  status?: number;
  config?: unknown;
  createdAt?: number;
  updatedAt?: number;
}

export interface UserRecord extends BaseEntity {
  username: string;
  mobile?: string;
  email?: string;
  realname?: string;
  nickname?: string;
  loginAt?: number;
  expireAt?: number;
  user_roles?: { roleId: number; roleName: string }[];
  user_depts?: { deptId: number; deptName: string; is_primary?: number }[];
}

export interface RoleRecord extends BaseEntity {
  tenantId?: number;
  roleCode: string;
  roleName: string;
  description?: string;
  operatorUsername?: string;
}

export interface DeptRecord extends BaseEntity {
  parentId?: number;
  deptCode?: string;
  deptName?: string;
  deptType?: string;
  deptPath?: string;
  sortOrder?: number;
  children?: DeptRecord[];
}

export interface PermissionNode extends BaseEntity {
  parentId?: number;
  permissionId?: number;
  permissionCode?: string;
  permissionName?: string;
  permissionType?: string;
  objectType?: string;
  objectId?: number;
  objectCode?: string;
  objectName?: string;
  objectPath?: string;
  httpMethod?: string;
  rolePermissionConfig?: unknown;
  autoGrant?: number;
  childGroup?: string;
  nodeType?: string;
  /** 附属权限展示前缀：api / button / form / tab 等 */
  resourceSubType?: string;
  checkable?: boolean;
  sortOrder?: number;
  children?: PermissionNode[];
}

export interface RoleDetail {
  role: RoleRecord;
  permissionTree: PermissionNode[];
  grantedPermissionIds?: number[];
}

export interface MenuRecord extends BaseEntity {
  parentId?: number;
  menuCode?: string;
  menuName?: string;
  menuType?: string;
  routePath?: string;
  componentPath?: string;
  icon?: string;
  sortOrder?: number;
  visible?: number;
  children?: MenuRecord[];
}

export interface PageElementRecord extends BaseEntity {
  menuId?: number;
  elementCode?: string;
  elementName?: string;
  elementType?: string;
  elementKey?: string;
  description?: string;
  sortOrder?: number;
  permissionId?: number;
  permissionCode?: string;
  permissionName?: string;
}

export interface ApiEndpointRecord extends BaseEntity {
  apiCode?: string;
  apiName?: string;
  apiGroup?: string;
  httpMethod?: string;
  pathPattern?: string;
  matchType?: string;
  /** 1-无需登录 2-无需鉴权(已登录) 3-需鉴权 */
  accessLevel?: number;
  description?: string;
  operatorUsername?: string;
}

export interface ApiGroupRecord extends BaseEntity {
  groupCode?: string;
  groupName?: string;
  description?: string;
  operatorUsername?: string;
}

export interface DataObjectRecord extends BaseEntity {
  tenantId?: number;
  objectCode?: string;
  objectName?: string;
  tableName?: string;
  ownerField?: string;
  tenantField?: string;
  deptField?: string;
  description?: string;
}

export interface DataScopeRecord extends BaseEntity {
  tenantId?: number;
  scopeCode?: string;
  scopeName?: string;
  scopeType?: string;
  conditionExpr?: string;
  priority?: number;
  description?: string;
}

export interface DataFieldRecord extends BaseEntity {
  tenantId?: number;
  dataObjectId?: number;
  fieldCode?: string;
  fieldName?: string;
  fieldPath?: string;
  fieldType?: string;
  sensitive?: number;
  description?: string;
}

export interface FieldPolicyRecord extends BaseEntity {
  tenantId?: number;
  policyCode?: string;
  policyName?: string;
  effect?: string;
  displayEffect?: string;
  searchEffect?: string;
  sortEffect?: string;
  editEffect?: string;
  exportEffect?: string;
  maskType?: string;
  maskPattern?: string;
  conditionExpr?: string;
  priority?: number;
  description?: string;
}

export interface DataScopeBindingRecord extends BaseEntity {
  tenantId?: number;
  subjectType?: string;
  subjectId?: number;
  objectCode?: string;
  scopeCode?: string;
  effect?: string;
  priority?: number;
  expireAt?: number;
  description?: string;
}

export interface FieldPolicyBindingRecord extends BaseEntity {
  tenantId?: number;
  subjectType?: string;
  subjectId?: number;
  apiCode?: string;
  fieldCode?: string;
  policyCode?: string;
  effect?: string;
  priority?: number;
  expireAt?: number;
  description?: string;
}

export interface PolicyRecord extends BaseEntity {
  tenantId?: number;
  policyCode?: string;
  policyName?: string;
  policyType?: string;
  conditionExpr?: string;
  effect?: string;
  priority?: number;
  description?: string;
}

export interface PolicyBindingRecord extends BaseEntity {
  tenantId?: number;
  subjectType?: string;
  subjectId?: number;
  policyCode?: string;
  effect?: string;
  priority?: number;
  expireAt?: number;
  description?: string;
}

export interface AccessListParams {
  page?: number;
  pageSize?: number;
  [key: string]: unknown;
}

export function page<T>(url: string, params?: AccessListParams) {
  return authRequest<PageData<T>>({ url, method: 'GET', params });
}

export function list<T>(url: string, params?: Record<string, unknown>) {
  return authRequest<T[]>({ url, method: 'GET', params });
}

export function get<T>(url: string, params?: Record<string, unknown>) {
  return authRequest<T>({ url, method: 'GET', params });
}

export function post<T = { id?: number }>(url: string, data?: unknown) {
  return authRequest<T>({ url, method: 'POST', data });
}

export function put<T = Record<string, never>>(url: string, data?: unknown) {
  return authRequest<T>({ url, method: 'PUT', data });
}

export function patch<T = Record<string, never>>(url: string, data?: unknown) {
  return authRequest<T>({ url, method: 'PATCH', data });
}

export function del<T = Record<string, never>>(url: string, params?: unknown) {
  return authRequest<T>({ url, method: 'DELETE', params });
}
