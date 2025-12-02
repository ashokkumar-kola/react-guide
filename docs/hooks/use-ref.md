# useRef - Complete Notes

`useRef` is a React Hook used to store **mutable values** that persist across renders **without causing re-renders**.  
It can also hold references to **DOM elements**.

---

## 1. 📝 Syntax & Basics

```jsx
const ref = useRef(initialValue);
```

- **Returns** → an object: `{ current: initialValue }`
- Updating `ref.current` **does not trigger re-render**
- Value persists across re-renders

---

## 2. 🎯 Common Uses

1. **Accessing DOM elements**
2. **Storing mutable values that shouldn’t trigger re-renders**
3. **Storing previous values**
4. **Storing timers, intervals, event handlers**
5. **Avoiding re-creation of objects/functions**

---

## 3. 🏗️ DOM References

### Basic Example

```jsx
function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

### What happens?

- `ref={inputRef}` assigns DOM node to `inputRef.current`
- No re-render when accessing or modifying `ref.current`

---

## 4. 🔄 Mutable Values (No Re-render)

```jsx
const countRef = useRef(0);

function increment() {
  countRef.current += 1;
}
```

- Changing `countRef.current` → does **not** update UI
- Useful for storing values that don’t belong in UI state

---

## 5. 🧠 Storing Previous Values

```jsx
const previousValue = useRef();

useEffect(() => {
  previousValue.current = value;
}, [value]);
```

- `previousValue.current` holds value from previous render
- Useful for comparisons/effects

---

## 6. ⏳ Timer / Interval References

```jsx
const timerRef = useRef(null);

function start() {
  timerRef.current = setInterval(() => {
    console.log('running...');
  }, 1000);
}

function stop() {
  clearInterval(timerRef.current);
}
```

- Store timer IDs to clean them later
- Prevents stale closures

---

## 7. ⚡ Avoiding Re-Creation (Stable References)

`useRef` gives a **stable object** that never changes between renders.

```jsx
const stableObject = useRef({ a: 1 });
```

- Useful for storing values tied to component lifetime
- Similar to instance variables in OOP components

---

## 8. ⚠️ Critical Rules

### ❌ 1. Changing `ref.current` does NOT cause re-render

Use `useState` if UI must update.

### ❌ 2. Refs are mutable — but React does not track changes

Do not rely on refs to trigger updates.

### ⏳ 3. Refs persist across the entire component lifetime

They are **not reset** unless component unmounts.

### ⚠️ 4. Avoid using refs for "derived state"

If UI depends on a value, use `useState` instead.

---

## 9. 🚨 Common Mistakes

1. ❌ Using ref instead of state to update UI
2. ⚠️ Mutating large objects in refs leading to unpredictable behavior
3. ❌ Using ref inside render logic → value may be outdated
4. ⚠️ Forgetting to clear timers stored in refs

---

## 10. 🚀 Best Practices

- Use `useRef` for **non-UI values**
- Use for storing:
  - timers
  - previous values
  - DOM nodes
  - large mutable objects
  - callback references

- Prefer `useState` when value must trigger UI update
- Use `useCallback` + `useRef` for stable handlers

---

## 11. 📦 Practical Patterns

### 🔁 1. Tracking Render Counts

```jsx
const renderCount = useRef(0);

useEffect(() => {
  renderCount.current += 1;
});
```

---

### 👀 2. Detecting Clicks Outside Element

```jsx
const boxRef = useRef();

useEffect(() => {
  function handleClick(event) {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      console.log('Clicked outside!');
    }
  }

  document.addEventListener('mousedown', handleClick);
  return () => document.removeEventListener('mousedown', handleClick);
}, []);
```

---

### 🧵 3. Persisting Data Without Re-Renders

```jsx
const latestValueRef = useRef(value);

useEffect(() => {
  latestValueRef.current = value;
}, [value]);
```

---

### 🧩 4. Stable Event Handler Reference (Advanced)

```jsx
const callbackRef = useRef(onChange);

useEffect(() => {
  callbackRef.current = onChange;
});

function handleClick() {
  callbackRef.current();
}
```

---

## 12. 💡 Key Takeaways

- Refs are for **mutable**, **non-UI**, **persistent** values
- Updating `ref.current` does **not** re-render
- Ideal for:
  - DOM access
  - timers
  - storing previous values
  - avoiding re-renders

- Think of refs as **instance variables** in functional components

---

### References

- **React Docs – useRef**: [https://react.dev/reference/react/useRef](https://react.dev/reference/react/useRef)
- **React Docs – Referencing Values Without Rendering**

```

```
