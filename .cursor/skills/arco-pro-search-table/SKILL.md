---
name: arco-pro-search-table
description: >-
  Standard layout for marketing-web list pages: Arco Pro-style query table
  (Card + search strip + toolbar + Table + pagination), split files, shared
  form label alignment, native label htmlFor on Arco Select primary input id,
  ArcoSelectInputIds helper, Pagination field id/name for audits, and
  tenant-aligned modal layout (horizontal Form + view Descriptions). Use when
  adding or refactoring a table list page, search-table, CRUD list, or Arco
  Design Table under marketing-web/src/pages.
---

# Arco Pro 检索表格页（marketing-web）

新增或改版**带检索的表格列表页**时，按本约定实现，并与现有页面对齐。

**参考实现（建议对照源码）：**

- `src/pages/system/tenants/`：检索区、**新建/编辑/查看弹窗**、表格列与分页。
- `src/pages/system/apps/`：与 tenants 同一套弹窗 Form 横向布局、弹窗内 **`formLikeField` + `ArcoSelectInputIds`** 的 `Select`、查看 **`Descriptions`** 与 **`labelStyle` / `valueStyle`**。

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

## `Form.Item`、Select 与「标签关联」（无障碍 / 国内审计）

Arco `Form.Item` 在同时有 `label` 与 `field` 时，会为 `<label>` 生成 `htmlFor="{field}_input"`。**`Select`** 的根节点多为 `role="combobox"` 的 `div`，**不是** HTML 里 `label[for]` 合法指向的 labelable 控件，易触发 **`label for` 不匹配**。

若改用 **外层 `Form.Item` 只写 `label`、内层再包一层带 `field` 的 `Form.Item` + `Select`**，外层会变成**没有 `htmlFor` 的 `<label>`**，部分审计（含「没有与表单字段关联的标签」）仍不通过：它们要求 **`htmlFor` 指向真实 `input`/`select`/`textarea` 的 `id`**，仅靠 `aria-labelledby` 或 Arco 的 `htmlDataAttributes` 可能**仍被判无效**。

**推荐做法（与 `system/tenants` 检索区、弹窗内 Select 一致）**：

1. **不要用 Arco 外层 `Form.Item` 的 `label` 包一层 `<label>`**：对该 `Select` 单独用 **`div.formLikeField`**（样式见 `style/index.module.less`：`formLikeField` / `formLikeFieldLabel` / `formLikeFieldControl`），比例对齐原 `labelCol` 5 / `wrapperCol` 19（约 **20.83%** 标签宽）。
2. 使用**原生** **`<label id="{baseId}-field-label" htmlFor={arcoSelectPrimaryInputId(baseId)}>`** 作为可见标题；`htmlFor` 必须等于 **`ArcoSelectInputIds`** 给主输入框写入的 id：**`arcoSelectPrimaryInputId(baseId)`** → 即 **`${baseId}-view-input-main`**（主输入为第一个非 `aria-hidden` 的 `input.arco-select-view-input`）。
3. 控件区放 **`<Form.Item field="..." noStyle>`** + **`ArcoSelectInputIds`**（`baseId` 与上式一致）；可选传入 **`ariaLabelledBy`** 为上述 **`label` 的 `id`**，组件会在 **`role="combobox"`** 上同步 **`aria-labelledby`**（双保险）。

```tsx
import ArcoSelectInputIds, { arcoSelectPrimaryInputId } from '@/pages/.../ArcoSelectInputIds';

const BASE = 'tenant-search-businessType';
const LABEL_ID = `${BASE}-field-label`;

<div className={styles.formLikeField}>
  <label
    id={LABEL_ID}
    className={styles.formLikeFieldLabel}
    htmlFor={arcoSelectPrimaryInputId(BASE)}
  >
    {t['...']}
  </label>
  <div className={styles.formLikeFieldControl}>
    <Form.Item field="businessType" noStyle>
      <ArcoSelectInputIds baseId={BASE} ariaLabelledBy={LABEL_ID}>
        <Select ... />
      </ArcoSelectInputIds>
    </Form.Item>
  </div>
</div>
```

原生 **`Input` / `Input.Password`** 等仍用普通 **`Form.Item` + `label` + `field`** 即可。

## 表单控件 `id` / `name` 与分页（自动填充 / Lighthouse）

Arco **`Select`** 内部 `input.arco-select-view-input` 默认**不带** `id` 或 `name`**；**`Table` 分页**的跳转框、每页条数下拉的内部 input 亦同。由 **`ArcoSelectInputIds`**（主框 id 为 **`arcoSelectPrimaryInputId(baseId)`**，辅输入为 **`${baseId}-view-input-aux-*`**）与 **`useArcoPaginationFieldIds`\*\* 在挂载及 DOM 变更后补全。

新页面若不便抽公共组件，至少为 **`Select` 主输入** 提供与 **`<label htmlFor>`** 一致的 **`id`**，并处理分页内部 input。

## 样式（`style/index.module.less`）

与 tenants 页复用同一套类名语义，新页面可复制同名片段：

- `search-form-wrapper`：flex + 底部分割线 + `margin-bottom`
- `search-form`：`flex:1`、`min-width:0`、`padding-right`；内嵌 `:global(.arco-form-label-item-left) > label { white-space: nowrap; }`
- `right-button`：右侧列、左边框、竖向 `space-between` 对齐按钮组
- `button-group`：工具栏左右分布
- `formLikeField` / `formLikeFieldLabel` / `formLikeFieldControl`：与 `labelCol` 5 / `wrapperCol` 19 对齐的 **Select 专用行**（配合原生 `<label htmlFor>`）
- **`tenant-view-modal`** / **`tenant-view-descriptions`**：查看弹窗与只读描述列表排版（见 `tenants/style/index.module.less`）；其它业务页可 **import 同路径样式** 复用类名。

## 文件拆分

| 文件                           | 职责                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| `index.tsx`                    | 页面组合、状态、请求、Modal、Table                                                                |
| `form.tsx`                     | 检索表单与 `onSearch`                                                                             |
| `ArcoSelectInputIds.tsx`       | Select：主/辅 `input` 的 `id`/`name`，`arcoSelectPrimaryInputId`，`combobox` 的 `aria-labelledby` |
| `useArcoPaginationFieldIds.ts` | 表格分页内部 input 的 `id` / `name`                                                               |
| `constants.tsx`                | `getColumns(t, callbacks)` 导出列定义                                                             |
| `locale/index.ts`              | 多语言文案                                                                                        |
| `utils.ts`                     | 列 render 用到的纯函数（标签映射、时间格式化等）                                                  |
| `style/index.module.less`      | 上述布局类                                                                                        |

## 表格列约定（与租户页一致时可沿用）

- 需要稳定键时 **`rowKey` 用业务主键**（如 `id`）；**主键列放第一列**（若产品要求展示 ID）。
- **枚举/状态**：优先 `Badge` + 文案函数（见 tenants `constants.tsx`）。
- **时间戳**：统一用 `utils` 内格式化（如 `formatEpochMs` 本地 `YYYY-MM-DD HH:mm:ss`），避免在列里散落 `new Date`。
- **可复制长文本**（编码、包名、密钥等）：列 `render` 使用 `<Typography.Text copyable>` 或 `copyable={{ text: 完整值 }}` 与省略展示结合（见 `apps/constants.tsx` 包名/编码列、`tenants` 租户编码列）。
- **操作列**：`fixed: 'right'`，`width` 留足；禁用逻辑与业务状态一致（如已删除不可编辑）。
- 列较多时设置 **`scroll.x`**，避免挤压。

## 弹窗：新建 / 编辑（与 `system/tenants` 一致）

与列表检索区同一套**横向标签比例**，**不要**使用与整页割裂的 `layout="vertical"`。

| 约定                | 说明                                                                                                                                                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Modal`             | `style={{ width: 520–600 }}`（字段多可略增）、`unmountOnExit`；提交可在 `onOk` 内 `try { await form.validate(); ... } catch { /* 校验或请求 */ }`（与 tenants 新建 Modal 一致）。                                                                                                                |
| `Form`              | **`layout="horizontal"`**、`labelAlign="left"`、**`labelCol={{ span: 5 }}`**、**`wrapperCol={{ span: 19 }}`**、**`className={styles['search-form']}`**（样式与检索区共用 `tenants/style/index.module.less` 或本页 import 同路径 less）。                                                         |
| 普通控件            | `Input` / `Input.Password` / `Radio.Group` 等仍用 **`Form.Item` + `label` + `field`**。                                                                                                                                                                                                          |
| 弹窗内 **`Select`** | 与检索区相同：须满足 **`label`↔ 真实 input** 审计时，使用 **`formLikeField` + 原生 `<label id="{base}-field-label" htmlFor={arcoSelectPrimaryInputId(baseId)}>` + 内层 `Form.Item` `noStyle` + `ArcoSelectInputIds`**（示例：tenants 新建/编辑「时区」、`apps` 新建/编辑「租户」「系统类型」）。 |

**常量**：每个弹窗内 Select 使用独立 `baseId`（如 `tenant-modal-create-tenantZone`），避免与检索区或其它弹窗 id 冲突。

## 弹窗：查看（只读）

与 tenants **`tenant-view-modal` + `tenant-view-descriptions`** 一致。

| 约定           | 说明                                                                                                                                                                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Modal`        | `footer={null}`、**`className={styles['tenant-view-modal']}`**、**`unmountOnExit`**、`style={{ width: 560–640 }}`。                                                                                                                             |
| `Descriptions` | **`column={1}`**、**`layout="horizontal"`**、**`colon=":"`**、**`className={styles['tenant-view-descriptions']}`**；**必须**设置与 tenants 一致的 **`labelStyle`** / **`valueStyle`**（标签右对齐、宽约 152px、`wordBreak: 'break-word'` 等）。 |
| 可复制字段     | `value` 内使用 `<Typography.Text copyable>`（见 tenants 查看租户编码、`apps` 查看 DIP/秘钥）。                                                                                                                                                  |

实现对照：`tenants/index.tsx` 查看 Modal 内 `Descriptions` 的 `labelStyle`/`valueStyle` 整块复制到新页面再改 `data`；`apps/index.tsx` 已对齐。

## 数据与副作用

- 列表分页推荐 **`listCurrent` / `listPageSize` / `listTotal` + `useMemo` 拼 `paginationProps`**；`useEffect` 拉列表时依赖上述**原始值**（及检索条件、`listTick`），**不要**依赖整个 `pagination` 对象，也不要只写 `pagination.current` 等点访问（易触发 `react-hooks/exhaustive-deps` 或与更新 `total` 的逻辑打架）。
- 类型与 API 放在 `src/api/` 对应模块；表格 `dataIndex` 与后端字段对齐。
- 新页若与 tenants 同域，可 **import** `../tenants/style/index.module.less` 与 **`../tenants/ArcoSelectInputIds`**、**`../tenants/useArcoPaginationFieldIds`**，避免重复造轮子（见 `system/apps`）。

## 自检清单

- [ ] Card + Title + SearchForm + button-group + Table 顺序与 tenants 一致
- [ ] 检索区 `search-form-wrapper` / `search-form` / `right-button` 三类名齐全
- [ ] **新建/编辑弹窗**：Form 为 **`layout="horizontal"`** + **`labelCol` 5 / `wrapperCol` 19** + **`className={styles['search-form']}`**，**禁止**为图省事使用 **`layout="vertical"`** 与列表区割裂
- [ ] **查看弹窗**：`tenant-view-modal` + `Descriptions` 的 **`tenant-view-descriptions`**，且带与 tenants 一致的 **`labelStyle` / `valueStyle`**
- [ ] 弹窗内 **`Select`**：使用 **`formLikeField` + `<label id htmlFor={arcoSelectPrimaryInputId(baseId)}>` + `ArcoSelectInputIds`**
- [ ] 列定义集中在 `constants.tsx`，文案走 `locale`；**长文本需复制**时列内用 **`Typography.Text` `copyable`**
- [ ] 检索区 **`Select` 且审计要求 `label`↔`input`**：使用 **`formLikeField` + `<label id htmlFor={arcoSelectPrimaryInputId(baseId)}>`** + **`ArcoSelectInputIds`**，勿仅依赖嵌套 `Form.Item` 的 Arco `<label>` 或仅 `aria-labelledby`
- [ ] `Select` 与表格**分页区**对内部 input 补全 **`id` / `name`**（`ArcoSelectInputIds` + `useArcoPaginationFieldIds` 或等价实现），避免自动填充类审计报错
