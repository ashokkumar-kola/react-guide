
# 📘 React Terms & Concepts

> A concise reference to understand common React concepts — **what, where, why, and how** (with short code examples).

---

## 🧠 State Management

### **State**

* **What:** Data managed by a component that determines what renders.
* **Where:** Inside components using `useState`.
* **Example:**

  ```jsx
  const [count, setCount] = useState(0);
  setCount(count + 1);
  ```

---

### **Props**

* **What:** Data passed from parent to child component.
* **Where:** Used to make components reusable and dynamic.
* **Example:**

  ```jsx
  <Button label="Click Me" />
  function Button({ label }) { return <button>{label}</button>; }
  ```

---

### **Lifting Up State**

* **What:** Moving shared state to the nearest common parent component.
* **Where:** When multiple child components need the same data.
* **Example:**

  ```jsx
  // Parent holds shared state
  const [value, setValue] = useState('');
  <ChildInput value={value} onChange={setValue} />
  <ChildDisplay value={value} />
  ```

---

### **Controlled Input**

* **What:** Input element whose value is controlled by React state.
* **Where:** Used in forms for validation and state sync.
* **Example:**

  ```jsx
  const [name, setName] = useState('');
  <input value={name} onChange={(e) => setName(e.target.value)} />
  ```

---

### **Uncontrolled Input**

* **What:** Input managed by the DOM (not React state).
* **Where:** When you only need value occasionally (e.g., on submit).
* **Example:**

  ```jsx
  const inputRef = useRef();
  <input ref={inputRef} />
  ```

---

### **State Updates Are Asynchronous**

* **What:** React batches state updates and applies them after rendering.
* **Why:** Improves performance by avoiding multiple re-renders.
* **Example:**

  ```jsx
  setCount(count + 1);
  console.log(count); // old value, updates after render
  ```

---

## ⚙️ Rendering & Virtual DOM

### **Render**

* **What:** The process where React calls your component to produce JSX.
* **When:** Happens after every state or prop change.

---

### **Virtual DOM**

* **What:** A lightweight in-memory tree representing the real DOM.
* **Why:** Enables efficient comparison (diffing) before updating the real DOM.

---

### **Reconciliation Process**

* **What:** React’s algorithm that compares the new and old virtual DOM and updates only what changed.
* **Example:**

  ```jsx
  // Only changed text will re-render
  <p>{count}</p>
  ```

---

### **Diffing**

* **What:** The comparison of new vs old virtual DOM nodes.
* **Why:** Determines minimal real DOM changes for better performance.

---

### **Commit Phase**

* **What:** After diffing, React updates the actual DOM and runs effects.

---

## 🧩 Components

### **Functional Components**

* **What:** Standard function-based React components using hooks.
* **Example:**

  ```jsx
  function Greeting({ name }) {
    return <h1>Hello, {name}</h1>;
  }
  ```

---

### **Pure Components**

* **What:** Components that render the same output for the same props/state.
* **Why:** Improves performance by skipping re-renders.
* **Example:**

  ```jsx
  export default React.memo(MyComponent);
  ```

---

### **Key Prop**

* **What:** Unique identifier for list items to help React track them.
* **Example:**

  ```jsx
  {items.map(item => <li key={item.id}>{item.name}</li>)}
  ```

---

### **Fragment**

* **What:** A wrapper that groups elements without adding extra DOM nodes.
* **Example:**

  ```jsx
  <>
    <Header />
    <Content />
  </>
  ```

---

## 🪄 Comparison & Copying

### **Shallow Copy**

* **What:** Copies only top-level properties (nested objects remain references).
* **Example:**

  ```js
  const newObj = { ...oldObj };
  ```

---

### **Deep Copy**

* **What:** Copies all nested levels recursively.
* **Example:**

  ```js
  const deepCopy = JSON.parse(JSON.stringify(oldObj));
  ```

---

### **Shallow Comparison**

* **What:** Compares references, not deep values.
* **Where:** Used by React.memo and PureComponent to detect prop changes.
* **Example:**

  ```js
  obj1 === obj2 // false even if contents are same
  ```

---

## 🧠 Lifecycle & Hooks

### **Mount**

* Component is added to the DOM.
* Example: `useEffect(() => { ... }, []);`

### **Update**

* Component re-renders when props or state change.

### **Unmount**

* Component is removed from DOM, cleanup runs.
* Example:

  ```jsx
  useEffect(() => {
    return () => console.log('Cleanup on unmount');
  }, []);
  ```

---

### **useEffect**

* **What:** Runs side effects like fetching data or event subscriptions.
* **Example:**

  ```jsx
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  ```

---

### **Custom Hooks**

* **What:** Reusable logic shared across components.
* **Example:**

  ```jsx
  function useToggle(initial = false) {
    const [value, setValue] = useState(initial);
    const toggle = () => setValue(v => !v);
    return [value, toggle];
  }
  ```

---

## ⚡ Performance Concepts

### **Batching**

* **What:** React groups multiple state updates into one render cycle.
* **Example:**

  ```jsx
  setX(1);
  setY(2); // Both update together, not separately
  ```

---

### **Re-render**

* **What:** Component function executes again due to changed state or props.

---

### **Memoization**

* **What:** Cache values or functions to avoid re-computation.
* **Example:**

  ```jsx
  const result = useMemo(() => heavyCalculation(num), [num]);
  const handleClick = useCallback(() => doSomething(), []);
  ```

---

### **Lazy Loading**

* **What:** Load components only when needed for performance.
* **Example:**

  ```jsx
  const About = React.lazy(() => import('./About'));
  ```

---

## 🔄 Data Flow & Patterns

### **Unidirectional Data Flow**

* **What:** Data flows parent → child (never backward).
* **Why:** Makes data flow predictable.

---

### **Prop Drilling**

* **What:** Passing props through multiple layers unnecessarily.
* **Fix:** Use context or state management.

---

### **Context API**

* **What:** Provides global data access without prop drilling.
* **Example:**

  ```jsx
  const ThemeContext = createContext();
  const value = useContext(ThemeContext);
  ```

---

## ⚙️ Miscellaneous

### **JSX**

* **What:** JavaScript syntax extension combining HTML + JS.
* **Example:**

  ```jsx
  const element = <h1>Hello React</h1>;
  ```

---

### **Synthetic Events**

* **What:** React’s cross-browser wrapper around native DOM events.
* **Example:**

  ```jsx
  <button onClick={(e) => console.log(e.target)}>Click</button>
  ```

---

### **Strict Mode**

* **What:** Development-only tool to detect side effects and bad patterns.
* **Example:**

  ```jsx
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ```

---

## ✅ Summary

* React uses **state**, **props**, and **virtual DOM** for efficient UI updates.
* **Lifting state**, **controlled inputs**, and **hooks** are core patterns.
* **Reconciliation** ensures minimal DOM updates.
* **Memoization**, **batching**, and **context** improve performance and maintainability.

---

Composition 
Error Boundaries
Event Delegation