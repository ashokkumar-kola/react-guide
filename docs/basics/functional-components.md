# React Functional Components (2025 Guide)

## 1. Introduction

- Stateless functions that return JSX
- Default component type since React 16.8
- Full power via Hooks (state, lifecycle, context, refs)
- Officially recommended over class components
- Smaller bundle, better tree-shaking, future-proof

## 2. Writing Styles

| Style                   | Syntax                                        | Hoisting | Recommended  |
| ----------------------- | --------------------------------------------- | -------- | ------------ |
| Function Declaration    | `function Button() {}`                        | Yes      | Rarely       |
| Function Expression     | `const Button = function() {}`                | No       | Avoid        |
| Arrow Function (const)  | `const Button = () => <button/>`              | No       | YES          |
| Arrow + Implicit Return | `const Button = () => <button>Click</button>` | No       | YES (simple) |
| Anonymous Inline        | `<div onClick={() => do()} />`                | —        | NEVER        |

## 3. Props Handling

- Destructure in parameters → `({ id, label })`
- Always type props (TypeScript preferred)
- Default props via destructuring: `({ size = 'md' })`
- Never mutate props
- Avoid index as key → use stable IDs

```tsx
type Props = { label: string; onClick?: () => void; variant?: 'primary' | 'ghost' }

const Button = ({ label, onClick = () => {}, variant = 'primary' }: Props) => (...)
```

## 4. Hooks Overview & Lifecycle Equivalents

| Class Lifecycle          | Hook Equivalent                    | Notes               |
| ------------------------ | ---------------------------------- | ------------------- |
| componentDidMount        | useEffect(() => {}, [])            | Run once            |
| componentDidUpdate       | useEffect(() => {})                | Run on every update |
| componentWillUnmount     | useEffect(() => () => cleanup, []) | Return cleanup      |
| getDerivedStateFromProps | useEffect + prevProps ref          | Rarely needed       |
| shouldComponentUpdate    | React.memo + arePropsEqual         | Manual optimization |

## 5. State Management

- useState → simple values
- useReducer → complex state logic
- Never mutate state directly
- Updater function for state-from-state: `setCount(c => c + 1)`

## 6. Best Practices

- Arrow functions + const only
- PascalCase component names
- One component per file
- Keep < 150 lines
- Extract JSX early
- No logic in render (move to useEffect/useMemo)
- Always exhaustive-deps (don’t disable rule blindly)
- Prefer composition over inheritance

## 7. Gotchas & Edge Cases

- Stale closures → use ref or updater functions
- Missing deps → false positives with objects/functions
- Inline objects/arrays → `{style={{ color: 'red' }}}` → new ref every render
- Inline handlers → `onClick={() => handle(i)}` → child re-renders
- useEffect runs after paint → don’t block UI
- setState in render → infinite loop
- Default props ignored when undefined passed → use destructuring defaults

## 8. Performance Optimization

- React.memo → shallow compare props
- useCallback → stable handlers
- useMemo → expensive calculations
- Stable prop references (no inline objects/functions)
- Key prop stable → prevents full remount

```tsx
const Button = React.memo(({ onClick, label }: Props) => (
  <button onClick={onClick}>{label}</button>
));
```

## 9. Functional vs Class Components

| Feature           | Functional + Hooks | Class Components       | Winner |
| ----------------- | ------------------ | ---------------------- | ------ |
| Syntax            | Clean, concise     | Verbose, this-binding  | Func   |
| State & Lifecycle | Hooks              | Lifecycle methods      | Func   |
| Performance       | Easier memoization | Manual optimization    | Func   |
| Bundle size       | Smaller            | Larger                 | Func   |
| Error Boundaries  | Only class (still) | Yes                    | Class  |
| Learning curve    | Hooks rules        | this + lifecycle order | Func   |
| New code (2025)   | 100% preferred     | Legacy only            | Func   |

## 10. Advanced Tips

- Extract custom hooks for reusable logic
- useContext + useReducer → Redux-like without lib
- useId() for accessible IDs (React 18+)
- useDeferredValue / useTransition → smooth UX
- useImperativeHandle + forwardRef → expose methods

## 11. Error Handling

- Error boundaries → still class-only
- Fallback UI with componentDidCatch
- Use try/catch in event handlers & async hooks

## 12. Testing Functional Components

- @testing-library/react
- Render with `render(<Component />)`
- Test behavior, not implementation
- Mock custom hooks when needed

## 13. Accessibility & UX

- Use semantic HTML
- Add aria-\* when needed
- Manage focus with useRef + useEffect
- Announce changes with aria-live

## 14. Ecosystem Integration

- Works perfectly with React Router, Redux, TanStack Query, etc.
- Server Components (React 18+) → functional only

## 15. Migration Notes

- Convert class → function + hooks in one PR if small
- Use eslint-plugin-react-hooks & react-codemod
- Replace componentDidMount → useEffect([], ...)
- Never mix hooks & lifecycle in same component

## 16. Examples

### Minimal

```tsx
const Hello = () => <div>Hello</div>;
```

### With Props & State

```tsx
const Counter = ({ initial = 0 }) => {
  const [count, setCount] = useState(initial);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
};
```

### Optimized + Memo

```tsx
const ListItem = React.memo(({ user, onSelect }) => {
  const handleClick = useCallback(() => onSelect(user.id), [user.id]);
  return <div onClick={handleClick}>{user.name}</div>;
});
```

## 17. References

- Official Docs: https://react.dev/reference/react/Component
- Hooks Rules: https://react.dev/learn/rules-of-hooks
- Legacy Class Docs: https://legacy.reactjs.org/docs/components-and-props.html
- React TypeScript Cheatsheet: https://react-typescript-cheatsheet.netlify.app

Ready for production. Use functional components only.

```

```
