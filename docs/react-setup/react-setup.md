
# 🧩 React Setup Notes

### 🚀 Create React App (with Vite)

**Recommended (official standard):**

```bash
npm create vite@latest my-app -- --template react
```

### ⚙️ Steps

```bash
cd my-app
npm install
npm run dev
```

Then open → [http://localhost:5173](http://localhost:5173)

---

### 🧠 Alternative Commands

| Purpose              | Command                                                | Notes                  |
| -------------------- | ------------------------------------------------------ | ---------------------- |
| New project (modern) | `npm create vite@latest`                               | Interactive setup      |
| Specific version     | `npm create vite@6.5.0 my-app -- --template react`     | Locks version          |
| Legacy (older style) | `npx create-vite@latest my-app --template react`       | Works, less common now |
| With TypeScript      | `npm create vite@latest my-app -- --template react-ts` | Adds TS support        |

---

### 🧰 Common Scripts

| Action               | Command           | Description              |
| -------------------- | ----------------- | ------------------------ |
| Start dev server     | `npm run dev`     | Runs local dev server    |
| Build for production | `npm run build`   | Builds `/dist` folder    |
| Preview build        | `npm run preview` | Serves built app locally |
| Install deps         | `npm install`     | Installs node modules    |

---

### ⚡ Quick Test (no install)

You can also test React directly in browser:

```html
<script src="https://unpkg.com/react@latest/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>
<script>
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement('h1', null, 'Hello World!'));
</script>
```

---

### 📚 Official Docs

* React Docs → [https://react.dev](https://react.dev)
* Vite Docs → [https://vite.dev](https://vite.dev/guide)

---
