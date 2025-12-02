# useState

---

## 1. 📝 Syntax & Basics

```jsx
const [state, setState] = useState(initialValue);
```

- **Returns** → `[currentValue, updaterFunction]`
- **Initial render** → uses `initialValue`
- **Subsequent renders** → uses latest state

---

## 2. 🎯 Initial State Patterns

```jsx
// Simple value
const [count, setCount] = useState(0);

// Lazy initializer (runs once)
const [data, setData] = useState(() => expensiveCalculation());

// Object state
const [user, setUser] = useState({ name: '', age: 0 });

// Array state
const [items, setItems] = useState([]);
```

---

## 3. 🔄 Updating State

### ⚙️ **Direct Update**

```jsx
setCount(5);
setName('John');
setIsVisible(true);
```

### ⚡ **Functional Update** (Recommended)

```jsx
setCount((prev) => prev + 1);
setItems((prev) => [...prev, newItem]);
```

> 💡 **Use functional updates when:**
>
> - Multiple state updates occur in sequence
> - Async operations depend on previous state
> - Batch updates are needed
> - New state depends on previous state

---

## 4. 🏗️ Data Type Patterns

### 🔢 **Primitives**

```jsx
// Number
const [count, setCount] = useState(0);

// String
const [text, setText] = useState('');

// Boolean
const [isOpen, setIsOpen] = useState(false);
```

### 👤 **Objects (Immutable Updates)**

```jsx
const [user, setUser] = useState({ name: 'John', age: 30 });

// Update
setUser((prev) => ({ ...prev, age: 31 }));

// Nested object
setUser((prev) => ({
  ...prev,
  profile: { ...prev.profile, city: 'NYC' },
}));
```

### 🧾 **Arrays (Immutable Updates)**

```jsx
const [items, setItems] = useState(['a', 'b']);

// Add
setItems((prev) => [...prev, 'c']);

// Remove
setItems((prev) => prev.filter((item) => item !== 'b'));

// Update
setItems((prev) => prev.map((item) => (item === 'a' ? 'updated' : item)));
```

---

## 5. ⚠️ Critical Rules

### ❌ **1. Never Mutate State Directly**

```jsx
// ❌ WRONG
state.count = 5;
state.items.push(newItem);

// ✅ CORRECT
setCount(5);
setItems((prev) => [...prev, newItem]);
```

### ⏳ **2. State Updates Are Asynchronous**

```jsx
// ❌ Don't rely on immediate update
console.log(count); // old value
setCount(count + 1);
console.log(count); // still old value

// ✅ Use functional updates for consecutive changes
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

### 🧩 **3. Object/Array Updates Need New References**

```jsx
// ❌ Won’t re-render (same reference)
stateObj.name = 'new';
setStateObj(stateObj);

// ✅ New reference triggers re-render
setStateObj({ ...stateObj, name: 'new' });
```

---

## 6. 🚀 Performance Tips

### ⚡ **Lazy Initial State**

```jsx
// ✅ Only runs once
const [data, setData] = useState(() => {
  return expensiveComputation();
});
```

### 🧠 **Batching Updates (React 18+)**

```jsx
// ✅ Single re-render in most cases
const handleClick = () => {
  setCount((c) => c + 1);
  setName('John');
  setActive(true);
};
```

---

## 7. 🔧 Common Patterns

### 🔁 **Toggle State**

```jsx
const [isOn, setIsOn] = useState(false);
const toggle = () => setIsOn((prev) => !prev);
```

### 📝 **Form State**

```jsx
const [form, setForm] = useState({ email: '', password: '' });

const updateField = (field, value) => {
  setForm((prev) => ({ ...prev, [field]: value }));
};
```

### 🧩 **Multiple Related States**

```jsx
// Option 1: Separate states
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [data, setData] = useState(null);

// Option 2: Combined state
const [state, setState] = useState({
  loading: false,
  error: null,
  data: null,
});
```

---

## 8. 🚨 Common Mistakes

1. ❌ Mutating state directly → No re-render
2. ⚠️ Using stale state in callbacks → Use functional updates
3. ⚠️ Forgetting spread operator → Lost properties
4. 🧱 Over-nesting state → Complex updates
5. 🌀 Too many `useState` calls → Consider `useReducer`

---

## 9. ✅ Best Practices

- Use **multiple `useState` hooks** for unrelated data
- Group **related fields** in objects
- Prefer **functional updates**
- Use **lazy initializers** for expensive computations
- Keep state **minimal**; compute derived data via `useMemo`

---

## 10. 💡 Key Takeaways

- **State updates are async** — don’t rely on immediate values
- **Always create new references** for objects/arrays
- **Functional updates** prevent stale state
- **Initializer functions** run only once
- **Batching** optimizes multiple updates

---
