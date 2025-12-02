# useLayoutEffect

`useLayoutEffect` fires **synchronously after DOM updates** but **before the browser paints the screen**.  
It allows you to read layout, measure DOM elements, and block the browser from painting until your logic runs.

It behaves like `useEffect` but with **timing differences**.

---

## 1. 📝 Syntax

```jsx
useLayoutEffect(() => {
  // run after DOM updates, before paint
  return () => {
    // cleanup
  };
}, [dependencies]);
```

---

## 2. 🎯 When to Use

Use `useLayoutEffect` when you need:

1. **DOM measurements**
   - width, height, bounding boxes

2. **Synchronous layout reads + updates**
   - measuring layout before the browser paints

3. **Prevent visual flicker**
   - updating styles before paint

4. **Mutating DOM elements**
   - scroll position
   - focus
   - manually applying CSS updates

---

## 3. 🔧 Timing Difference: `useEffect` vs `useLayoutEffect`

### `useEffect`

- Runs **after paint**
- Does **not block** the browser
- Best for async logic, subscriptions, API calls

### `useLayoutEffect`

- Runs **before paint**
- **Blocks painting**
- Perfect for layout-sensitive logic

**Timeline**

```
Render → DOM Updated → useLayoutEffect → Browser Paint → useEffect
```

---

## 4. 📏 DOM Measurement Example

```jsx
function Box() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    setWidth(rect.width);
  }, []);

  return (
    <>
      <div ref={boxRef} className="box">
        Box
      </div>
      <p>Width: {width}</p>
    </>
  );
}
```

Here, using `useEffect` would cause a **visible flash** because the width would update _after_ paint.

---

## 5. 🎛️ Synchronous Mutations Example

```jsx
useLayoutEffect(() => {
  elementRef.current.style.transform = 'translateX(0)';
});
```

- Ensures styling updates are applied **before the browser paints**
- Prevents flickering or jumpy layout

---

## 6. 🧭 Scroll Position Adjustments

```jsx
useLayoutEffect(() => {
  containerRef.current.scrollTop = 0;
});
```

Ensures scroll adjustment happens **before** anything is visible.

---

## 7. ⚠️ Critical Rules

### ❌ 1. Avoid heavy work

`useLayoutEffect` blocks paint — heavy logic = jank.

### ❌ 2. Do not use for API calls

Use `useEffect` for async side effects.

### ❌ 3. Do not mutate layout inside render functions

Use `useLayoutEffect` instead.

### ⚠️ 4. Cleanup also runs before paint

Useful for restoring previous DOM styles.

---

## 8. 🚨 Common Mistakes

1. ❌ Using `useLayoutEffect` for things that do not depend on layout
2. ❌ Performing expensive operations → leads to blocking UI
3. ⚠️ Using it everywhere instead of only layout-specific places
4. ❌ Misunderstanding that it runs synchronously

---

## 9. 🚀 Performance Tips

- Prefer `useEffect` unless layout measurement is required
- Move heavy calculations outside the effect
- Batch DOM reads separately from DOM writes
- Avoid re-running `useLayoutEffect` unnecessarily (define correct deps)

---

## 10. 💡 When NOT to Use `useLayoutEffect`

Avoid it when:

- Doing API calls
- Registering event listeners
- Logging
- Running async logic
- Updating state unrelated to layout

These should use `useEffect`.

---

## 11. 📦 Practical Patterns

### 1. Auto-Focusing Without Flicker

```jsx
useLayoutEffect(() => {
  inputRef.current.focus();
}, []);
```

### 2. Measuring Element Size Before Paint

```jsx
useLayoutEffect(() => {
  const { height } = elRef.current.getBoundingClientRect();
  setHeight(height);
});
```

### 3. Preventing Layout Shift

```jsx
useLayoutEffect(() => {
  if (isOpen) {
    modalRef.current.style.opacity = 1;
  }
});
```

---

## 12. 💡 Key Takeaways

- `useLayoutEffect` runs **before paint**
- Use it for:
  - DOM measurement
  - synchronous DOM mutations
  - avoiding flickers
  - correcting layout before display

- Avoid heavy logic — it blocks rendering
- Use `useEffect` for async/non-layout work

---

### References

- **React Docs — useLayoutEffect**: [https://react.dev/reference/react/useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

```

---
```
