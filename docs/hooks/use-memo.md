# useMemo

`useMemo` is a React Hook that **memoizes a computed value** and returns a cached result.  
It helps avoid **expensive recalculations** on every render.

---

## 1. 📝 Syntax & Basics

```jsx
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
```

- **Returns** → a memoized result
- Only re-runs the function when **dependencies change**
- Helps optimize expensive calculations or object references

---

## 2. 🎯 When to Use

Use `useMemo` for:

1. **Expensive calculations**
2. **Derived data** from state/props
3. **Avoiding re-creation** of objects/arrays causing re-renders
4. **Stabilizing dependencies** for `useEffect`, `useCallback`, memoized components

> 💡 _Do NOT use it for micro-optimizations._
> Use only when a calculation is actually expensive.

---

## 3. 📊 Basic Example

```jsx
const doubled = useMemo(() => {
  return count * 2;
}, [count]);
```

- Recomputes only when `count` changes
- Otherwise returns cached result

---

## 4. 🧮 Expensive Computation Example

```jsx
const expensiveResult = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

Without `useMemo`, `heavyCalculation()` would run **every render**, causing performance issues.

---

## 5. 🏗️ Stabilizing Object/Array References

React compares **object references**, not values.
Without `useMemo`, objects recreate each render.

### Without useMemo (Bad)

```jsx
const filters = { sort: 'asc' }; // new reference every render
```

### With useMemo (Good)

```jsx
const filters = useMemo(() => ({ sort: 'asc' }), []);
```

This prevents unnecessary re-renders in child components or effects.

---

## 6. 🎛️ Memoizing Functions vs useCallback

`useMemo` memoizes **values**
`useCallback` memoizes **functions**

```jsx
const memoizedValue = useMemo(() => compute(), []);
const memoizedFn = useCallback(() => compute(), []);
```

Internally, this is equivalent:

```
useCallback(fn, deps) === useMemo(() => fn, deps)
```

---

## 7. 🧩 Real Use Cases

### 1. Filtering or Sorting Data

```jsx
const filtered = useMemo(() => {
  return items.filter((item) => item.active);
}, [items]);
```

### 2. Avoiding Re-renders in Child Components

```jsx
const user = useMemo(() => ({ name }), [name]);

<Child user={user} />;
```

### 3. Creating Stable Styles

```jsx
const styles = useMemo(
  () => ({
    backgroundColor: isDark ? 'black' : 'white',
  }),
  [isDark]
);
```

### 4. Memoizing Derived State

```jsx
const totalPrice = useMemo(() => {
  return cart.reduce((sum, item) => sum + item.price, 0);
}, [cart]);
```

---

## 8. ⚠️ Critical Rules

### ❌ 1. Don’t use for every value

Use only when computation is expensive or reference stability matters.

### ⏳ 2. Dependency array correctness is crucial

Wrong deps → stale or incorrect values.

### ❌ 3. Do not mutate memoized values

Returned memoized object should be treated as **immutable**.

### ⚠️ 4. Memoization has a cost

React stores cached values → unnecessary usage may worsen performance.

---

## 9. 🚨 Common Mistakes

1. ❌ Using `useMemo` when `useState` or inline values are enough
2. ⚠️ Forgetting dependency values → stale results
3. ❌ Returning mutable object and modifying it
4. ⚠️ Using it to "fix" re-renders instead of fixing component structure
5. ❌ Wrapping everything in `useMemo` → over-optimization

---

## 10. 🚀 Best Practices

- Use for **heavy computations**
- Use to **stabilize objects/arrays** passed to children
- Use when a value affects `useEffect` dependencies
- Keep dependency arrays accurate
- Avoid overuse — measure performance first

---

## 11. 📦 Practical Patterns

### 1. Memoizing an Expensive Mapper

```jsx
const processedList = useMemo(() => {
  return list.map((item) => slowTransform(item));
}, [list]);
```

### 2. Stable Object for API Params

```jsx
const params = useMemo(
  () => ({
    page,
    sort,
  }),
  [page, sort]
);
```

### 3. Calculating Derived State

```jsx
const completedCount = useMemo(() => {
  return tasks.filter((t) => t.done).length;
}, [tasks]);
```

---

## 12. 💡 Key Takeaways

- `useMemo` caches values to avoid unnecessary recalculation
- Recomputes only when dependencies change
- Best for:
  - expensive logic
  - derived values
  - preventing unnecessary renders
  - stabilizing object/array references

- Don’t overuse it — only when there's a real performance need

---

### References

- **React Docs — useMemo**: [https://react.dev/reference/react/useMemo](https://react.dev/reference/react/useMemo)

```

---
```
