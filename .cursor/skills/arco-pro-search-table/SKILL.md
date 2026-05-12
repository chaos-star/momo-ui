---
name: arco-pro-search-table
description: >-
  Standard layout for marketing-web list pages: Arco Pro-style query table
  (Card + search strip + toolbar + Table + pagination), split files, shared
  form label alignment, modal forms matching the search row, and nested
  Form.Item for Select/DatePicker so label htmlFor passes a11y checks. Use when
  adding or refactoring a table list page, search-table, CRUD list, or
  Arco Design Table under marketing-web/src/pages.
---

# Arco Pro 检索表格页（marketing-web）

新增或改版**带检索的表格列表页**时，按本约定实现，并与现有页面对齐。参考实现：`src/pages/system/tenants/`。

## 页面结构

1. **外层**：`<Card>` → `<Typography.Title heading={6}>` 页面标题（文案走 `locale`）。
2. **检索区**：单独组件（如 `form.tsx`），外层容器 `className={styles['search-form-wrapper']}`。
3. **工具栏**：`PermissionWrapper`（若需权限）包一层；内部 `div` 使用 `styles['button-group']`，左侧主操作（新建等），右侧次要操作（刷新、导出等）。
4. **表格**：`<Table rowKey="..." border scroll={{ x: 按需 }} pagination={...} columns={...} data={...} onChange={分页变化} />`；分页与列表请求受控（`current` / `pageSize` / `total`）。

## 检索表单（`form.tsx`）

- 与 Arco Pro `search-table` 一致：**左侧表单 + 右侧竖排按钮**。
- `Form`：`labelAlign="left"`、`labelCol={{ span: 5 }}`、`wrapperCol={{ span: 19 }}`、`className={styles['search-form']}`。
- 栅格：`Grid.Row` + `Grid.Col`，`gutter={24}`；`Col span` 可按语言在 `zh-CN` 与 `en-US` 下区分（与 tenants 一致）。
- 右侧按钮区容器：`className={styles['right-button']}`，内放查询、重置等。

## `Form.Item` 与 `label for`（无障碍 / 审计）

Arco `Form.Item` 在同时有 `label` 与 `field` 时，会为 `<label>` 生成 `htmlFor="{field}_input"`。**`Select`、`DatePicker`、`Cascader` 等**的可见焦点在自定义容器（如 `role="combobox"` 的 `div`）上，**不是 HTML 规范中的 labelable 控件**，浏览器/审计工具会报：`label for` 与可填充字段不匹配。

**约定**：上述控件在检索区、弹窗中与 Arco 文档一致，使用**嵌套 `Form.Item`**：

- **外层**：只写 `label`（不写 `field`），负责布局与展示标签 → 外层不生成错误的 `for`。
- **内层**：`field="..."`、`rules={...}`（如需）、`noStyle`，内层子节点为 `Select` 等。

```tsx
<Form.Item label={t['...']}>
  <Form.Item field="businessType" noStyle>
    <Select ... />
  </Form.Item>
</Form.Item>
```

原生 **`Input` / `Input.TextArea` / `Input.Password`** 等与 `field` 同层即可，无需嵌套。

## 样式（`style/index.module.less`）

与 tenants 页复用同一套类名语义，新页面可复制同名片段：

- `search-form-wrapper`：flex + 底部分割线 + `margin-bottom`
- `search-form`：`flex:1`、`min-width:0`、`padding-right`；内嵌 `:global(.arco-form-label-item-left) > label { white-space: nowrap; }`
- `right-button`：右侧列、左边框、竖向 `space-between` 对齐按钮组
- `button-group`：工具栏左右分布
- `operations`：表格操作列内按钮横向排列（按需）

## 文件拆分

| 文件                      | 职责                                             |
| ------------------------- | ------------------------------------------------ |
| `index.tsx`               | 页面组合、状态、请求、Modal、Table               |
| `form.tsx`                | 检索表单与 `onSearch`                            |
| `constants.tsx`           | `getColumns(t, callbacks)` 导出列定义            |
| `locale/index.ts`         | 多语言文案                                       |
| `utils.ts`                | 列 render 用到的纯函数（标签映射、时间格式化等） |
| `style/index.module.less` | 上述布局类                                       |

## 表格列约定（与租户页一致时可沿用）

- 需要稳定键时 **`rowKey` 用业务主键**（如 `id`）；**主键列放第一列**（若产品要求展示 ID）。
- **枚举/状态**：优先 `Badge` + 文案函数（见 tenants `constants.tsx`）。
- **时间戳**：统一用 `utils` 内格式化（如 `formatEpochMs` 本地 `YYYY-MM-DD HH:mm:ss`），避免在列里散落 `new Date`。
- **操作列**：`fixed: 'right'`，`width` 留足；禁用逻辑与业务状态一致（如已删除不可编辑）。
- 列较多时设置 **`scroll.x`**，避免挤压。

## 弹窗表单（新增 / 编辑 / 查看）

与检索区同一套横向标签，避免 `layout="vertical"` 与列表页风格割裂：

- `layout="horizontal"`
- `labelAlign="left"`
- `labelCol={{ span: 5 }}`、`wrapperCol={{ span: 19 }}`
- `className={styles['search-form']}`
- 弹窗 `style={{ width: 520–600 }}` 视字段量微调

查看类只读展示可用无 `form` 实例的 `Form` + `Form.Item` 只放展示组件，仍用相同 `labelCol` / `wrapperCol`。

## 数据与副作用

- 列表请求依赖 `pagination.current`、`pagination.pageSize`、检索条件；**不要在 `useEffect` 依赖整个 `pagination` 对象**（易与 `setPagination` 更新 `total` 形成循环），可拆依赖或使用显式 `listTick` / `bumpList()` 在变更后触发刷新。
- 类型与 API 放在 `src/api/` 对应模块；表格 `dataIndex` 与后端字段对齐。

## 自检清单

- [ ] Card + Title + SearchForm + button-group + Table 顺序与 tenants 一致
- [ ] 检索区 `search-form-wrapper` / `search-form` / `right-button` 三类名齐全
- [ ] 弹窗 Form 与检索区 label 左右布局一致
- [ ] 列定义集中在 `constants.tsx`，文案走 `locale`
- [ ] 含 `Select` / `DatePicker` 等时，检索区与弹窗使用**嵌套 Form.Item**（外层仅 `label`，内层 `field` + `noStyle`），避免 `label for` 审计报错
