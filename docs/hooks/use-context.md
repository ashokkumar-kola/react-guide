# useContext

---

## 1. 🎯 Purpose

**Global State Sharing** — enables data sharing across components **without prop drilling**.

### 🧠 Key Uses

- Avoids deeply nested prop passing
- Centralizes global or shared state
- Enables cross-component communication

> 💡 Ideal for themes, authentication, language, and app-wide state.

---

## 2. 📝 Syntax

### **Create Context**

```jsx
const MyContext = React.createContext(defaultValue);
```

### **Provide Context**

```jsx
<MyContext.Provider value={currentValue}>
  {/* Child components */}
</MyContext.Provider>
```

### **Consume Context**

```jsx
const value = useContext(MyContext);
```

> ⚙️ `useContext()` allows any descendant component to access context value directly.

---

## 3. 🔧 Basic Pattern

### **1️⃣ Create Context**

```jsx
const ThemeContext = React.createContext();
```

---

### **2️⃣ Provide Value**

```jsx
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}
```

---

### **3️⃣ Consume Value**

```jsx
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <button onClick={() => setTheme('dark')}>Toggle Theme</button>
    </header>
  );
}
```

---

## 4. ⚡ Common Use Cases

### 🎨 **Theme Management**

```jsx
const ThemeContext = React.createContext();
// Share light/dark mode across app
```

---

### 🔐 **User Authentication**

```jsx
const AuthContext = React.createContext();
// Share user data, login, and logout
```

---

### 🌍 **Language / Locale**

```jsx
const LanguageContext = React.createContext();
// Share current language and translations
```

---

### 🧩 **Global App State**

```jsx
const AppContext = React.createContext();
// Share loading, error, or global data
```

---

## 5. 🏗️ Advanced Patterns

### 🧱 **Multiple Contexts**

```jsx
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={auth}>
        <UserContext.Provider value={user}>
          <Component />
        </UserContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

function Component() {
  const theme = useContext(ThemeContext);
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
}
```

> 💡 Combine multiple contexts when different data domains are needed.

---

### ⚙️ **Custom Provider Component**

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const value = {
    theme,
    toggleTheme: () =>
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
```

---

### 🧭 **Default Values**

```jsx
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
// Used if no Provider exists in component tree
```

---

## 6. ⚠️ Performance Considerations

### 🧠 **Re-render Optimization**

```jsx
// ❌ Causes re-renders: new object every render
<ThemeContext.Provider value={{ theme, setTheme }}>

// ✅ Memoized value object
const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

<ThemeContext.Provider value={themeValue}>
```

---

### 🧩 **Separate Contexts for Different Concerns**

```jsx
// ❌ One giant context
const AppContext = React.createContext();

// ✅ Split logically
const ThemeContext = React.createContext();
const UserContext = React.createContext();
const SettingsContext = React.createContext();
```

> ✅ Smaller, focused contexts = fewer re-renders and better scalability.

---

## 7. 🚨 Common Mistakes

### ❗ **Missing Provider**

```jsx
// ❌ No Provider → uses defaultValue (often undefined)
const value = useContext(ThemeContext);

// ✅ Wrap with Provider
<ThemeContext.Provider value={actualValue}>
  <Component />
</ThemeContext.Provider>;
```

---

### 🔁 **Unnecessary Re-renders**

```jsx
// ❌ New object every render
<Context.Provider value={{ data, setData }}>

// ✅ Memoize value
const contextValue = useMemo(() => ({ data, setData }), [data]);
```

---

### 🏗️ **Over-nesting Providers**

```jsx
// ❌ Too many nested Providers
<AProvider><BProvider><CProvider>...

// ✅ Combine or extract into a custom hook/provider
```

---

## 8. 💡 Best Practices

✅ **Do’s**

1. Create contexts close to where they’re used
2. Use **meaningful names** (e.g., `UserContext`, not `Context1`)
3. Provide **default values** for better testing and safety
4. **Split logically** — use multiple small contexts
5. **Memoize context values** to prevent extra re-renders

❌ **Don’ts**

- Avoid a “mega context” for everything
- Don’t skip wrapping consumers with providers
- Don’t create new value objects inline each render

---

## 9. 🧩 Custom Hook Pattern

Encapsulate context logic inside a custom hook for reusability and safety.

```jsx
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

> 💡 Simplifies imports and ensures context is properly used.

---

## 10. 🎯 Key Takeaways

- 🧭 **Solves prop drilling** — share state globally
- ⚙️ **Provider / Consumer pattern** — wrap and consume
- 🚀 **Optimize performance** — memoize context values
- 🧩 **Use multiple contexts** — avoid overloading one
- 🔧 **Provide defaults** — prevent runtime errors

---

✅ **Summary:**
`useContext` is the go-to React Hook for **sharing global or cross-component state** efficiently.
When used with **memoization, custom hooks, and context separation**, it leads to clean, scalable, and high-performance React architectures.

---
