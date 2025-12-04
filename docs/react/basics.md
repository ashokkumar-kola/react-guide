<!-- # Components

- UI building blocks
- Reusable, isolated pieces
- Pure functions of props
- Encourages modular design

---

# Functional Components

- JS functions returning JSX
- Stateless or stateful (hooks)
- Simple, fast, recommended
- Props as parameters
- Example:

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}
```

- Tips:
  - Keep small & focused
  - Use hooks instead of lifecycle
  - One responsibility per component

- Track learning %: _Functional comps - 15%_

---

# JSX

- JS + HTML syntax
- Compiled to React.createElement
- Must return single parent
- Expressions allowed: `{}`
- Example:

```jsx
const title = 'Hello';
<h1>{title}</h1>;
```

- Tips:
  - Use fragments `<> </>`
  - Use camelCase for attributes
  - Avoid inline heavy logic

---

# Props vs State

## Props

- Read‑only
- Passed parent → child
- Controls behavior & data
- No modification inside child
- Example:

```jsx
<MyCard title="React" />
```

## State

- Mutable
- Internal to component
- useState, useReducer
- Triggers re-renders

```jsx
const [count, setCount] = useState(0);
```

## Quick diff

- Props = external input
- State = internal memory
- Props immutable, state mutable

---

# Conditional Rendering

- Render UI based on conditions
- Same as JS logic
- Patterns:

```jsx
isLoggedIn ? <Home /> : <Login />;

isOnline && <Status />;

if (error) return <Error />;
```

- Tips:
  - Keep logic clean
  - Extract conditions to small functions
  - Avoid nested ternaries

---

# Composition vs Inheritance

- React prefers composition
- Pass children or render props
- Reuse via wrapping, not extending

```jsx
<Card>
  <Profile />
</Card>
```

- Avoid class inheritance patterns
- Tips:
  - Break into smaller composable units
  - Use props.children for layout
  - Use HOCs or custom hooks for reuse

---

# Functional vs Class Components

## Functional

- Hooks
- Cleaner, smaller
- No lifecycle methods
- Better for modern React

## Class

- Old pattern
- lifecycle methods
- this keyword
- More verbose

## Conclusion

- Prefer functional for new apps
- Learn class only for legacy -->
