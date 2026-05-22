---
name: front-web
description: This skill should be used when working on the marketing-web frontend project (referenced as front-web), especially when modifying pages, components, styles, themes, or UI interactions that must follow Arco Design Pro conventions and support light/dark themes.
---

# front-web Frontend Guidelines

Apply these requirements whenever modifying `marketing-web` UI, styles, pages, or components.

## Visual style

- Keep the default Arco Design Pro visual language and interaction style.
- Preserve the existing project theme system instead of introducing unrelated custom visual systems.
- Prefer Arco Design / Arco Pro components, spacing, typography, borders, shadows, and state styles.
- Avoid excessive custom decoration that makes pages diverge from Arco Pro.

## Theme compatibility

- Support both light and dark themes for all new or modified UI.
- Prefer Arco theme variables such as `var(--color-bg-2)`, `var(--color-fill-1)`, `var(--color-text-1)`, `var(--color-text-2)`, `var(--color-border-1)` instead of hard-coded light colors.
- Avoid hard-coded colors such as `#fff`, `#f7f8fa`, `#1d2129` in themed surfaces, cards, text, borders, and preview blocks unless there is a clear non-theme reason.
- Verify text, buttons, cards, previews, and form areas remain readable in both light and dark themes.

## Gradients

- Use flat theme backgrounds by default.
- Avoid gradients unless the user explicitly requests a gradient effect for a specific area.
- When a gradient is explicitly required, build it from theme variables and confirm it works in light and dark themes.

## Standard list page layout (tenant reference)

**Canonical reference:** `src/pages/system/tenants/`

When adding or refactoring system management list pages (search + table + CRUD modals), **match the tenant management page layout** unless the user explicitly requests otherwise.

### Page skeleton (top to bottom, inside one `Card`)

1. **Title** — `<Title heading={6}>` with page name (i18n key when the page has locale).
2. **Optional description** — `<Text type="secondary">` only when the page needs brief help text; use theme-safe spacing (`margin-bottom: 20px`), not inline hard-coded colors.
3. **Search area** — `search-form-wrapper` (see below).
4. **Toolbar** — `button-group`: primary actions (e.g. add) on the **left** via `<Space>`, list **refresh** on the **right**. Wrap sensitive actions in `PermissionWrapper` when the page is permission-gated (same as tenant).
5. **Table** — bordered table with server pagination; operation column uses `styles.operations`.
6. **Modals** — create / edit / view dialogs below the table (not nested inside table).

Do **not** use a single-row `Input.Search` + refresh as the only filter UI. Do **not** put add and refresh in one undifferentiated `Space` row without the `button-group` pattern.

### Shared styles (reuse, do not duplicate)

Import layout styles from the tenant module:

```ts
import styles from '../tenants/style/index.module.less';
```

Use these class names from that file:

| Class                                                           | Purpose                                                                                                                                      |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `search-form-wrapper`                                           | Flex row: search form + right-side query/reset buttons; bottom border `var(--color-border-1)`, `margin-bottom: 20px`                         |
| `search-form`                                                   | Form area `flex: 1`; label `white-space: nowrap`                                                                                             |
| `right-button`                                                  | Vertical stack of 查询 / 重置; left border `var(--color-border-2)`, `padding-left: 20px`                                                     |
| `button-group`                                                  | Flex `space-between`; `margin-bottom: 20px`                                                                                                  |
| `formLikeField` / `formLikeFieldLabel` / `formLikeFieldControl` | Select (and similar) fields in the **search grid** — label width **5/24** (`20.8333%`), `padding-right: 16px` between label and control      |
| `operations`                                                    | Table row action buttons (text buttons, compact padding, use `<Space className={styles.operations} size={10} wrap>` for 10px button spacing) |

Page-specific LESS should only add deltas (e.g. tip text, modal tweaks). **Do not** override label column to `flex: auto` or shrink label spacing unless the user asks — that breaks parity with tenant.

### Search area

- Prefer a dedicated `form.tsx` (or inline equivalent) with its own `Form.useForm()`.
- **Query triggers on button click**, not on every keystroke: parent holds `formParams`; search handler sets `formParams` and resets `current` to `1`; reset clears form and `formParams`.
- Form config (same as tenant `form.tsx`):

```tsx
<Form
  className={styles['search-form']}
  labelAlign="left"
  labelCol={{ span: 5 }}
  wrapperCol={{ span: 19 }}
>
  <Row gutter={24}>
    <Col span={lang === 'zh-CN' ? 8 : 12}>...</Col>
  </Row>
</Form>
```

- **Input / Radio** in search grid: normal `<Form.Item label="..." field="...">`.
- **Select** in search grid: use **`formLikeField`** + native `<label className={styles.formLikeFieldLabel}>` + `<Form.Item field="..." noStyle>` + control in `formLikeFieldControl`. For accessibility on tenant-style Selects, reuse `ArcoSelectInputIds` from `tenants/ArcoSelectInputIds.tsx` when adding new search Selects on critical pages.
- **Accessibility for Arco Select labels (mandatory):** when a Select uses a native `<label htmlFor=...>` or a custom form-like label, wrap the Select with `ArcoSelectInputIds` and set `htmlFor={arcoSelectPrimaryInputId(baseId)}` plus `ariaLabelledBy`. This prevents audit errors such as `Incorrect use of <label for=FORM_ELEMENT>` and `A form field element should have an id or name attribute` caused by Arco's internal `.arco-select-view-input` lacking stable `id` / `name`.
- Right column buttons: primary **查询** (`IconSearch`) + **重置** (`IconRefresh`).

### Toolbar

```tsx
<div className={styles['button-group']}>
  <Space>
    <Button type="primary" icon={<IconPlus />} onClick={openCreate}>
      新增
    </Button>
  </Space>
  <Button icon={<IconRefresh />} onClick={bumpList}>
    刷新
  </Button>
</div>
```

Use normal `div` elements only — **never** typo `motion.div` as a tag name (breaks the page).

### Responsive layout

+- All new or modified pages must remain usable at desktop, tablet, and narrow mobile widths.
+- Prefer Arco Grid responsive props instead of fixed-only spans in search forms and modal grids: `xs={24} sm={24} md={12} lg={8}` for three-column search fields, `xs={24} sm={24} md={12}` for two-column modal fields, and `xs={24}` for full-width fields.
+- Management-page search areas using `search-form-wrapper` must collapse vertically on small screens; the right-side query/reset buttons should wrap horizontally and must not squeeze the form controls.
+- Toolbars such as `button-group` must support wrapping with `gap` so primary actions and refresh buttons do not overflow on narrow screens.
+- Tables with multiple columns should set horizontal scroll, e.g. `scroll={{ x: 1000 }}` or a page-specific width that matches the columns.
+- Standard modals should use responsive widths such as `style={{ width: 'min(560px, calc(100vw - 32px))' }}`; wide modals should use the same pattern with their target width. Drawers should use `width="min(920px, 100vw)"` or an equivalent responsive width.
+- Fixed two-column or side-panel layouts must collapse to a single column at small breakpoints (`max-width: 768px`) unless there is a stronger product reason not to.
+- Avoid introducing fixed pixel widths without `max-width`, `min-width: 0`, wrapping, or horizontal scroll safeguards.

-

### Table

- `border` enabled.
- Pagination via `useMemo<PaginationProps>`:

```ts
{
  sizeCanChange: true,
  showTotal: true,
  current,
  pageSize,
  total,
  pageSizeChangeResetCurrent: true,
  showJumper: true,
  pageSizeOptions: [10, 20, 50, 100],
}
```

- `onChange` updates `current` and `pageSize`.
- List refresh: `listTick` / `tick` counter incremented after mutations (avoid ad-hoc refetch logic scattered in handlers).
- Columns: extract to `constants.tsx` when the table is non-trivial; actions via callbacks object (tenant pattern).
- Operation column: `width` + `fixed: 'right'`, `Space` with `className={styles.operations}` and `size={10}` + `wrap`, text buttons with `IconEdit` / `IconDelete` where appropriate. When a page owns its own LESS instead of importing tenant styles, copy the tenant `operations` rules for compact text-button padding and icon-text spacing so the 10px action-button gap is visually effective.
- Operation overflow rule: when a row has more than 4 possible operations, build an ordered `actions` array first, filter by permission/status with `actions.filter((item) => item.visible !== false)`, then render `visibleActions.slice(0, 3)` as direct buttons and put `visibleActions.slice(3)` into a `Dropdown` named "更多". Do not hard-code the first 3 buttons separately from the dropdown; this ensures hidden operations are dynamically backfilled from "更多".

### Create / edit modals

- `style={{ width: 560 }}` for standard single-column forms (wider only when the form has two columns of fields, e.g. API page `880`).
- `unmountOnExit` on modals.
- Form:

```tsx
<Form
  layout="horizontal"
  labelAlign="left"
  labelCol={{ span: 5 }}
  wrapperCol={{ span: 19 }}
  className={styles['search-form']}
>
```

- **Select inside modals** that need aligned labels: same `formLikeField` pattern as search (see tenant create/edit timezone field).
- Separate `Form.useForm()` instances for create vs edit vs search (do not share one form instance across search and modal).

### View modal (read-only)

- Use `Descriptions` with `column={1}`, `layout="horizontal"`, `colon=":"`.
- Label column ~`152px`, `textAlign: 'right'`, `color: var(--color-text-2)`; reuse `tenant-view-descriptions` / `tenant-view-modal` classes from tenant styles when applicable.

### State and data loading

- `loading` + `useEffect` with `canceled` flag for list fetch.
- Trim string params before API calls; map empty strings to `undefined` for "no filter".
- After create/update/delete: close modal → `Message.success` → bump list tick.

### File structure (recommended for new pages)

Mirror tenant when the page is medium/large:

```
pages/system/<feature>/
  index.tsx       # page shell, table, modals
  form.tsx        # search form (optional but preferred)
  constants.tsx   # table columns
  locale/index.ts # zh-CN / en-US (preferred for new pages)
  style/index.module.less  # only page-specific overrides
  utils.ts        # formatters, label helpers
```

### Role authorization (`pages/system/roles/RoleGrantDrawer.tsx`)

- Left: menu permission tree (`GET /api/system/permissions/grant-tree/menus`).
- Right: child permissions **only** from `sys_permission_relation` for the selected menu (`GET /api/system/permissions/grant-children?parentPermissionId=`).
- **`sys_permission_relation` semantics**: defines which subsidiary permissions (API/element) a menu needs and `auto_grant` behavior. **No rows for a menu = that menu needs no subsidiary permissions** — show empty state on the right, do not auto-list unconfigured APIs.
- Child checkboxes enabled only when the menu is checked on the left.

### Related references

- **API management** (`pages/system/apis/`) — same tenant layout styles; wider modal and multi-column form when needed.
- **Permission relations** (`pages/system/permission-relations/`) — sole place to configure menu ↔ API/element relations; follow tenant layout; search Selects use `formLikeField`.

## Form layout (summary)

- Default: **horizontal** left label / right control, `labelCol={{ span: 5 }}`, `wrapperCol={{ span: 19 }}`, `labelAlign="left"`.
- Avoid `layout="vertical"` for management modals unless explicitly requested.
- Search grid Selects: **`formLikeField`**, not plain `Form.Item` with `label`, to keep label–control spacing identical to tenant.

## Validation

- After changing page styles or interactions, run available lint/build checks when practical.
- For visible `marketing-web` page changes, prefer validating through existing running previews or user-provided screenshots when available; do not start a local development service solely because this skill is loaded.
- Before finishing, grep changed files for accidental `motion.div` typos and mismatched JSX tags.

## Page Index

> This index is the single source of truth for all page locations. When adding a new page, **append a new row to this table** to keep the index in sync; do not leave it stale.

### Static Top-Level Pages (defined in `src/routes.ts` / `src/main.tsx`)

| Page Name     | Route Key             | Code Path (relative to `src/`) | Entry File  |
| ------------- | --------------------- | ------------------------------ | ----------- |
| 登录          | `/login`              | `pages/login/`                 | `index.tsx` |
| 403 (无权限)  | `/403`                | `pages/exception/403/`         | `index.tsx` |
| 仪表盘-工作台 | `dashboard/workplace` | `pages/dashboard/workplace/`   | `index.tsx` |
| 示例页        | `example`             | `pages/example/`               | `index.tsx` |

### Dynamic System Pages (route keys served from backend menu tree)

| Page Name       | Route Key                             | Code Path (relative to `src/`)               | Entry File  |
| --------------- | ------------------------------------- | -------------------------------------------- | ----------- |
| 系统-应用管理   | `system/apps`                         | `pages/system/apps/`                         | `index.tsx` |
| 系统-API 分组   | `system/api-groups`                   | `pages/system/api-groups/`                   | `index.tsx` |
| 系统-API 管理   | `system/apis`                         | `pages/system/apis/`                         | `index.tsx` |
| 系统-权限诊断   | `system/auth-diagnosis`               | `pages/system/auth-diagnosis/`               | `index.tsx` |
| 系统-数据范围   | `system/data-scopes`                  | `pages/system/data-scopes/`                  | `index.tsx` |
| 系统-部门管理   | `system/depts`                        | `pages/system/depts/`                        | `index.tsx` |
| 系统-字段策略   | `system/field-policies`               | `pages/system/field-policies/`               | `index.tsx` |
| 系统-菜单管理   | `system/menus`                        | `pages/system/menus/`                        | `index.tsx` |
| 系统-权限边界包 | `system/permission-boundary-packages` | `pages/system/permission-boundary-packages/` | `index.tsx` |
| 系统-权限关系   | `system/permission-relations`         | `pages/system/permission-relations/`         | `index.tsx` |
| 系统-权限管理   | `system/permissions`                  | `pages/system/permissions/`                  | `index.tsx` |
| 系统-策略管理   | `system/policies`                     | `pages/system/policies/`                     | `index.tsx` |
| 系统-角色管理   | `system/roles`                        | `pages/system/roles/`                        | `index.tsx` |
| 系统-系统设置   | `system/setting`                      | `pages/system/setting/`                      | `index.tsx` |
| 系统-租户管理   | `system/tenants`                      | `pages/system/tenants/`                      | `index.tsx` |
| 系统-用户管理   | `system/users`                        | `pages/system/users/`                        | `index.tsx` |

### Routing Mechanism

- **Static routes** are defined in `src/routes.ts` (array `routes`) — dashboard/workplace, example.
- **Dynamic routes** are fetched at runtime from `GET /api/system/permissions/grant-tree/menus`, then transformed via `transformMenusToRoutes()`.
- **Lazy loading**: `src/layout.tsx` uses `import.meta.glob('./pages/**/[a-z[]*.tsx')` to auto-discover page modules. Route key `system/tenants` maps to `./pages/system/tenants/index.tsx`.
- **Multi-tenant**: All layout routes are served under `/:tenantCode/` prefix. Top-level routes (`/login`, `/403`) are tenant-agnostic.
- **Default entry**: `pickDefaultMenuPath()` picks either the menu with `useIndex===1` or the first `MENU`-type leaf.

### Adding a New Page

1. Create directory `src/pages/<route-key>/index.tsx` (and optional `form.tsx`, `constants.tsx`, `locale/`, `style/`, `utils.ts`).
2. Add the page entry to the **Dynamic System Pages** table above with its route key and description.
3. If the page needs a static route entry, also add it to `src/routes.ts` and the **Static Top-Level Pages** table.
4. Ensure the backend menu tree returns the new route key at the appropriate position.
