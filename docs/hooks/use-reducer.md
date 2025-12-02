# useReducer

`useReducer` is a React Hook for managing complex state logic and state that depends on previous values.  
It is an alternative to `useState` when you have multiple related state variables or complicated state updates.

---

## 1. 📝 Syntax & Basics

```jsx
const [state, dispatch] = useReducer(reducer, initialState, init);
```

- **Returns** → `[currentState, dispatchFunction]`
- **reducer** → function `(state, action) => newState`
- **dispatch** → function to send an action to the reducer
- **initialState** → initial value of the state
- **init (optional)** → function to lazily initialize state

---

## 2. 🔧 Reducer Function

The reducer is a **pure function**: given the same inputs, it always returns the same output.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

---

## 3. ⚡ Dispatching Actions

```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });

<button onClick={() => dispatch({ type: 'increment' })}>+</button>
<button onClick={() => dispatch({ type: 'decrement' })}>-</button>

<p>Count: {state.count}</p>
```

- `dispatch({ type: '...' })` triggers the reducer
- `action` can also include a `payload` for dynamic data

```jsx
dispatch({ type: 'set', payload: 10 });
```

---

## 4. 🏗️ State Patterns

### 🔢 **Primitives**

```jsx
const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}
```

### 👤 **Objects**

```jsx
const initialState = { count: 0, name: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'setName':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
```

### 🧾 **Arrays**

```jsx
const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
```

---

## 5. ⚠️ Critical Rules

### ❌ **Reducer Must Be Pure**

- No side effects inside the reducer
- Do not call APIs or mutate variables outside

### ❌ **Never Mutate State**

```jsx
// ❌ WRONG
state.count += 1;

// ✅ CORRECT
return { ...state, count: state.count + 1 };
```

### ⏳ **Dispatch Is Asynchronous**

- Multiple dispatches may be batched
- State updates are not immediate

---

## 6. 🚀 Advanced Patterns

### Lazy Initialization

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, initFunction);

function initFunction(initialValue) {
  return { count: initialValue };
}
```

- Useful for **expensive initializations**
- Runs **once on mount**

### Action Payloads

```jsx
dispatch({ type: 'setCount', payload: 10 });
```

- Reduces need for multiple action types
- Can store dynamic data

### Combined State Management

```jsx
const initialState = {
  loading: false,
  error: null,
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'fetchStart':
      return { ...state, loading: true, error: null };
    case 'fetchSuccess':
      return { ...state, loading: false, data: action.payload };
    case 'fetchError':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
```

---

## 7. 🔧 Common Patterns

### 🔁 Toggle State

```jsx
const [state, dispatch] = useReducer(reducer, { isOpen: false });

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
```

### 📝 Form State

```jsx
const initialForm = { email: '', password: '' };

function formReducer(state, action) {
  return { ...state, [action.field]: action.value };
}

const [form, dispatch] = useReducer(formReducer, initialForm);

dispatch({ field: 'email', value: 'user@example.com' });
```

### 🧩 Complex Multi-Step Updates

- For apps with multiple related states, `useReducer` is cleaner than multiple `useState` hooks

---

## 8. 🚨 Common Mistakes

1. ❌ Mutating state inside reducer → No re-render
2. ⚠️ Performing side effects inside reducer → violates purity
3. ⚠️ Forgetting to return previous state for unknown actions
4. 🌀 Overcomplicating with unnecessary dispatches

---

## 9. ✅ Best Practices

- Use `useReducer` for **complex or related state**
- Prefer **pure functions** for reducers
- Keep actions **predictable and small**
- Use **lazy initialization** for expensive state
- Combine `useReducer` with `useContext` for global state

---

## 10. 💡 Key Takeaways

- `useReducer` is ideal for **complex state logic**
- `dispatch` triggers state changes via **pure reducer functions**
- Supports **objects, arrays, primitives**
- Can simplify code compared to multiple `useState` calls
- Works well with **Context API** for scalable state management

---

### References

- [React Docs - useReducer](https://react.dev/reference/react/useReducer)
- [React Docs - Using Reducer for Complex State](https://reactjs.org/docs/hooks-reference.html#usereducer)

```

---

```
