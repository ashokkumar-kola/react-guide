

---

# React Hooks - High Level Notes

## 1. 📋 Hook Categories

### 🔹 **Basic Hooks**

1. `useState` — **State management**
2. `useEffect` — **Side effects**
3. `useContext` — **Context consumption**

### 🔹 **Additional Hooks**

4. `useReducer` — **Complex state**
5. `useMemo` — **Expensive calculations**
6. `useCallback` — **Function optimization**
7. `useRef` — **DOM references**
8. `useImperativeHandle` — **Custom ref behavior**
9. `useLayoutEffect` — **Synchronous effects**
10. `useDebugValue` — **Debugging**

---

## 2. 🎯 One-Word Use Cases

| Hook                  | Keyword           |
| --------------------- | ----------------- |
| `useState`            | **State**         |
| `useEffect`           | **Effects**       |
| `useContext`          | **Context**       |
| `useReducer`          | **Reducers**      |
| `useMemo`             | **Optimization**  |
| `useCallback`         | **Functions**     |
| `useRef`              | **References**    |
| `useImperativeHandle` | **Customization** |
| `useLayoutEffect`     | **Synchronous**   |
| `useDebugValue`       | **Debugging**     |

---

## 3. ⚠️ Rules of Hooks

### 🔑 **Two Main Rules**

1. **Only call hooks at the top level**
   > ❌ Not in loops, conditions, or nested functions

2. **Only call from React functions**
   > ✅ Functional components or custom hooks only

### 💡 **Why these rules?**

* React relies on **consistent hook call order**
* Ensures **predictable behavior** across renders

---

## 4. 🔄 Lifecycle Equivalents

| **Class Component**        | **Hook Equivalent**        |
| -------------------------- | -------------------------- |
| `constructor`              | `useState` (initial value) |
| `componentDidMount`        | `useEffect` with `[]`      |
| `componentDidUpdate`       | `useEffect` (no deps)      |
| `componentWillUnmount`     | `useEffect` cleanup        |
| `getDerivedStateFromProps` | `useState` + `useEffect`   |

---

## 5. 💡 Key Points to Remember

### 🧩 **State Management**

* State updates are **asynchronous**
* Use **functional updates** for consecutive state changes
* State hooks trigger **re-renders**
* Objects/arrays need **new references**

### 🌐 **Effects & Side Effects**

* Runs **after render**
* **Cleanup** prevents memory leaks
* **Dependency array** controls execution
* `[]` → mount/unmount only

### ⚡ **Performance**

* `useMemo` caches **values**
* `useCallback` caches **functions**
* Prevents **unnecessary re-renders**
* Use when passing callbacks to optimized children

### 🧭 **References**

* `useRef` doesn’t trigger re-renders
* Persists across re-renders
* Stores **mutable values**
* Access **DOM elements directly**

---

## 6. 🚨 Common Pitfalls

### 🐛 **Stale Closures**

* Functions capture old render values
* Use **functional updates** for state
* Always include dependencies in effects

### 🔁 **Infinite Loops**

* State updates inside effects without proper deps
* Objects in dependency arrays
* Missing **cleanup functions**

### 💧 **Memory Leaks**

* Missing cleanup for **subscriptions**
* Async ops after **unmount**
* Forgotten **event listener removal**

---

## 7. 🛠️ When to Use Which Hook

### ⚙️ **State Choices**

| Scenario             | Hook         |
| -------------------- | ------------ |
| Simple local state   | `useState`   |
| Complex state logic  | `useReducer` |
| Global state sharing | `useContext` |

### 🔄 **Effect Choices**

| Scenario             | Hook                         |
| -------------------- | ---------------------------- |
| General side effects | `useEffect`                  |
| DOM measurements     | `useLayoutEffect`            |
| Cleanup on unmount   | `useEffect` (with return fn) |

### ⚡ **Optimization Choices**

| Scenario             | Hook          |
| -------------------- | ------------- |
| Heavy computations   | `useMemo`     |
| Stable callbacks     | `useCallback` |
| Use only when needed | ✅             |

---

## 8. 📝 Best Practices

### 📊 **Dependency Arrays**

* Include **all values** used in effect
* `[]` → run on mount/unmount only
* No array → run **every render**

### 🧩 **Custom Hooks**

* Extract **reusable logic**
* Name must start with **"use"**
* Can call **other hooks**

### 🧱 **Organization**

* Group related hooks logically

  * State → Effects → Context → Refs
* Place **custom hooks** at top or bottom

---

## 9. 🔧 Development Tips

### 🧪 **Debugging**

* Use **React DevTools**
* `useDebugValue` for custom hooks
* Check **hook order consistency**

### 🧷 **Testing**

* Test custom hooks via **components**
* Mock effects carefully
* Verify **cleanup behavior**

---

✅ **Summary:**
React Hooks simplify state and lifecycle management, but correctness depends on **consistent order, proper dependencies**, and **performance-aware usage**.

---
