
---

# useEffect - Complete Notes

## 1. 🎯 Purpose

**Manages side effects** in React components such as:

* 🌐 Data fetching
* 🔔 Subscriptions
* ⏱️ Timers
* 🧩 DOM manipulation
* 🔧 API calls

> 💡 **Definition:**
> A *side effect* is any operation that affects something outside the component’s render (like network requests, subscriptions, or DOM changes).

---

## 2. 📝 Syntax

```jsx
useEffect(() => {
  // Effect logic

  return () => {
    // Cleanup logic
  };
}, [dependencies]);
```

* **First argument** → Effect callback
* **Return function** → Cleanup (optional)
* **Dependency array** → Controls execution frequency

---

## 3. 🔧 Dependency Array Patterns

### ⚙️ **No Dependency Array**

```jsx
useEffect(() => {
  // Runs after EVERY render
});
```

> ⚠️ Re-runs on every state or prop change — use sparingly.

---

### 🧱 **Empty Array**

```jsx
useEffect(() => {
  // Runs ONCE after initial render
  // Equivalent to componentDidMount
}, []);
```

---

### 🎯 **With Dependencies**

```jsx
useEffect(() => {
  // Runs when dep1 or dep2 changes
  // Equivalent to componentDidUpdate
}, [dep1, dep2]);
```

> ✅ Add **all variables** used inside the effect to ensure predictable updates.

---

## 4. 🧹 Cleanup Patterns

### 🖱️ **Event Listeners**

```jsx
useEffect(() => {
  const handleClick = () => console.log('clicked');
  document.addEventListener('click', handleClick);

  return () => document.removeEventListener('click', handleClick);
}, []);
```

---

### 🔄 **Subscriptions**

```jsx
useEffect(() => {
  const subscription = API.subscribe(data => setData(data));

  return () => subscription.unsubscribe();
}, []);
```

---

### ⏰ **Timers**

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);

  return () => clearInterval(timer);
}, []);
```

---

## 5. ⚠️ Common Mistakes

### ❗ **Missing Dependencies**

```jsx
// ❌ Missing count dependency
useEffect(() => {
  document.title = `Count: ${count}`;
}, []);

// ✅ Include all used values
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

### 🔁 **Infinite Loops**

```jsx
// ❌ Infinite re-renders
useEffect(() => {
  setState(state + 1); // triggers re-render
}); // No dependency array

// ✅ Fixed with proper dependencies
useEffect(() => {
  // Logic that doesn’t trigger re-render
}, [someDependency]);
```

---

### 🧠 **Stale Closures**

```jsx
// ❌ Uses stale state value
useEffect(() => {
  const id = setInterval(() => {
    console.log(count); // Always initial value
  }, 1000);
  return () => clearInterval(id);
}, []);

// ✅ Correct: use functional updates or deps
useEffect(() => {
  const id = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);
```

---

## 6. 🚀 Performance Patterns

### ⚙️ **Conditional Effects**

```jsx
useEffect(() => {
  if (shouldFetch) {
    fetchData();
  }
}, [shouldFetch]); // Runs only when shouldFetch changes
```

---

### 🧩 **Multiple Effects**

```jsx
// Separate unrelated logic
useEffect(() => {
  // API call
}, [userId]);

useEffect(() => {
  // DOM update
}, [isVisible]);
```

---

### ⏳ **Skip Initial Run**

```jsx
const isFirstRender = useRef(true);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  // Effect logic for updates only
}, [dependency]);
```

> 💡 Helpful when you want logic to run **only after the first render**.

---

## 7. 🔄 Lifecycle Equivalents

| **Class Lifecycle**    | **Hook Equivalent**                   |
| ---------------------- | ------------------------------------- |
| `componentDidMount`    | `useEffect(() => {}, [])`             |
| `componentDidUpdate`   | `useEffect(() => {}, [deps])`         |
| `componentWillUnmount` | `useEffect(() => return cleanup, [])` |

---

## 8. 💡 Best Practices

✅ **Do’s**

* Declare dependencies **honestly** — trust ESLint
* **Separate concerns** with multiple effects
* Always **cleanup** listeners, timers, and subscriptions
* Use empty array only for **mount/unmount** behavior
* Extract repeated logic into **custom hooks**

❌ **Don’ts**

* Don’t skip dependencies to “fix” warnings
* Don’t mix unrelated logic inside one effect
* Don’t cause **state updates** without dependency awareness

---

## 9. 🎯 Key Takeaways

* **Dependency array** → Controls when the effect runs
* **Cleanup function** → Prevents memory leaks
* **Multiple effects** → Improve maintainability
* **Include all dependencies** → Avoid stale data
* **Empty array** → `componentDidMount` + cleanup behavior

---

✅ **Summary:**
`useEffect` is React’s way of synchronizing your component with **external systems or side effects**.
Proper use of dependencies and cleanups ensures **predictable, memory-safe, and performant** components.

---
