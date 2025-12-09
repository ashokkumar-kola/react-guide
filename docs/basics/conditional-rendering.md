# Conditional Rendering in React (2025 Guide)

## Core Principles

- Render different JSX based on state/props
- Always return valid JSX or `null`
- No `display: none` hacks → use real conditional

## All Conditional Patterns

| Pattern                      | Syntax Example                                       | Best For              |
| ---------------------------- | ---------------------------------------------------- | --------------------- |
| **if / else**                | `{isLoading ? <Spinner /> : <Content />}`            | Binary states         |
| **&& (AND)**                 | `{user && <Profile user={user} />}`                  | Show only if truthy   |
| **Ternary**                  | `{status === 'success' ? <Done /> : <Error />}`      | Two outcomes          |
| **Immediate return (guard)** | `if (!user) return null;`                            | Early exit (cleanest) |
| **Switch-like**              | `{['admin','editor'].includes(role) && <Toolbar />}` | Multiple conditions   |
| **Object map**               | `{STATUS_MAP[status]}`                               | Many static states    |
| **Component as variable**    | `const Modal = isOpen ? ConfirmModal : null`         | Dynamic component     |

| ** || (OR fallback)** | `{name || 'Guest'}` | Default values |

## Real-World Examples

```tsx
// 1. Early return (recommended)
const Profile = ({ user }) => {
  if (!user) return <LoginPrompt />;
  if (user.isBanned) return <BannedMessage />;

  return <UserDashboard user={user} />;
};

// 2. Multiple conditions
{
  isLoading && <Spinner />;
}
{
  error && <Alert error={error} />;
}
{
  data && <Table data={data} />;
}
{
  !isLoading && !data && <EmptyState />;
}

// 3. Role-based rendering
{
  user.role === 'admin' && <AdminPanel />;
}
{
  ['admin', 'editor'].includes(user.role) && <EditButton />;
}

// 4. Object lookup (cleanest for many states)
const STATUS_COMPONENTS = {
  idle: null,
  loading: <Spinner />,
  success: <CheckIcon />,
  error: <ErrorAlert />,
};

return <div className="status">{STATUS_COMPONENTS[status]}</div>;
```

## Advanced & Pro Patterns

```tsx
// 5. Dynamic component
const components = { Modal, Drawer, Toast };
const Popup = components[type] || null;

// 6. Compound conditions
{
  isOpen && (
    <Portal>
      <Overlay onClick={onClose}>
        <Modal onClose={onClose}>{children}</Modal>
      </Overlay>
    </Portal>
  );
}

// 7. List with conditions
{
  items.map((item) => (
    <Item
      key={item.id}
      {...item}
      isActive={selectedId === item.id}
      isDisabled={isLoading}
      badge={item.count > 0 && <Badge>{item.count}</Badge>}
    />
  ));
}
```

## Gotchas & Anti-Patterns

| Bad                          | Problem                                              | Fix                                                         |
| ---------------------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| `{condition && <Component>}` | Returns `false` → renders "false"                    | `{condition && <Component />}`                              |
| `<div hidden={condition}>`   | Still mounts → side effects run                      | Real conditional or `visibility: hidden` only for SEO       |
| Complex nested ternaries     | Unreadable                                           | Extract to variables or early returns                       |
| `&&` with numbers            | `count && <span>{count}</span>` → shows "0" as false | `count != null && <span>{count}</span>` or `Boolean(count)` |
| Forgetting `key` in lists    | Reconciliation bugs                                  | Always add stable `key`                                     |

## Performance Tips

- Use `React.memo` on conditionally rendered children
- Avoid recreating components in conditions
- Prefer early returns over deep nesting

```tsx
const ExpensiveChart = React.memo(() => <Chart />);

const Dashboard = ({ showChart }) => {
  if (!showChart) return <Summary />;

  return (
    <>
      <Summary />
      <ExpensiveChart />
    </>
  );
};
```

## Accessibility Tips

- Use `aria-live` for dynamic content
- Manage focus when showing/hiding modals
- Don’t hide content with `display: none` if screen readers need it

```tsx
<div aria-live="polite">{error && <ErrorMessage>{error}</ErrorMessage>}</div>
```

## One-Liner Cheat Sheet

```tsx
{
  loading && <Spinner />;
}
{
  error && <Alert />;
}
{
  data ? <Content /> : <Empty />;
}
{
  role === 'admin' && <DangerZone />;
}
{
  items.length > 0 ? <List /> : <Empty />;
}
```
