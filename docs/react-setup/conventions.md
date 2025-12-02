---

# 🧭 Project Conventions

> 🗂️ Keep code **consistent, predictable, and readable.**
> These conventions apply to all contributors in this React + Vite project.

---

## 🏗️ Folder & File Naming

| Type                       | Convention                    | Example                             |
| -------------------------- | ----------------------------- | ----------------------------------- |
| **Folders**                | lowercase with hyphens        | `components/`, `user-profile/`      |
| **React components**       | PascalCase                    | `Header.jsx`, `UserCard.jsx`        |
| **Hooks**                  | camelCase starting with `use` | `useFetch.js`, `useAuth.js`         |
| **Context files**          | PascalCase + `Context`        | `ThemeContext.jsx`                  |
| **Utility / helper files** | camelCase                     | `formatDate.js`, `calculateAge.js`  |
| **CSS / SCSS files**       | match component name          | `Header.css`, `UserCard.module.css` |
| **Assets**                 | lowercase with hyphens        | `logo.svg`, `user-avatar.png`       |
| **Test files**             | match file + `.test.js`       | `Header.test.jsx`                   |

---

## 🧩 React Component Structure

### ✅ Functional Components Only

Use **function components + hooks** (no class components).

```jsx
import React from 'react';

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;
```

---

### ✅ File Organization

Each component lives in its own folder if it has styles, tests, or assets:

```
src/components/
 └── Button/
     ├── Button.jsx
     ├── Button.css
     └── Button.test.jsx
```

---

## 💬 Code Style

| Rule            | Convention                          | Example                                                                                      |
| --------------- | ----------------------------------- | -------------------------------------------------------------------------------------------- |
| **Imports**     | Group by type (React, libs, local)  | `import React from 'react';`<br>`import { useState } from 'react';`<br>`import './App.css';` |
| **Quotes**      | Use single quotes `'` in JS/JSX     | `'Hello'`                                                                                    |
| **Semicolons**  | Required                            | `const x = 10;`                                                                              |
| **Indentation** | 2 spaces                            | ✅ consistent spacing                                                                        |
| **JSX props**   | One per line if many                | `<Button label="Save" disabled onClick={handleSave} />`                                      |
| **Functions**   | Arrow functions for inline handlers | `onClick={() => doSomething()}`                                                              |

Use **Prettier** for auto-formatting.

---

## 🧠 State & Props

- Keep components **pure** (no side effects in render).
- Use **hooks** (`useState`, `useEffect`, `useContext`, etc.) for state and lifecycle.
- Prefer **lifting state up** instead of prop-drilling too deep.
- Extract reusable logic into **custom hooks** in `/src/hooks`.

---

## 📦 Folder Responsibilities

| Folder        | Purpose                                  |
| ------------- | ---------------------------------------- |
| `components/` | Reusable UI elements                     |
| `pages/`      | Route-level screens                      |
| `layouts/`    | Shared layouts (header, sidebar, outlet) |
| `hooks/`      | Custom reusable hooks                    |
| `context/`    | React Context providers                  |
| `services/`   | API calls / external integrations        |
| `utils/`      | Pure helper functions                    |
| `styles/`     | Global or modular CSS                    |
| `router/`     | Routing configuration                    |
| `docs/`       | Internal documentation                   |

---

## 🔖 Git & Commits

### 🧾 Commit Message Format (Conventional Commits)

```
<type>: <short summary>
```

| Type          | Usage                                |
| ------------- | ------------------------------------ |
| **feat:**     | New feature                          |
| **fix:**      | Bug fix                              |
| **refactor:** | Code improvement, no behavior change |
| **style:**    | Code style (formatting, lint fixes)  |
| **docs:**     | Documentation changes                |
| **test:**     | Add or modify tests                  |
| **chore:**    | Build / dependency / config updates  |

**Examples:**

```
feat: add dark mode toggle
fix: correct button hover color
docs: update setup instructions
```

---

## 🧰 Linting & Formatting

Add ESLint + Prettier:

```bash
npm i -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-react-hooks
```

Then create `.eslintrc`:

```json
{
  "extends": ["react-app", "prettier"],
  "plugins": ["react", "react-hooks"],
  "rules": {
    "react/prop-types": "off"
  }
}
```

And `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

---

## 🧪 Testing (optional but recommended)

Keep tests near the component:

```
Button/
 ├── Button.jsx
 └── Button.test.jsx
```

Use **Vitest + React Testing Library**:

```bash
npm i -D vitest @testing-library/react @testing-library/jest-dom
```

Run tests:

```bash
npm run test
```

---

## ✅ Summary

```
✔️ Clean folder structure
✔️ Consistent naming
✔️ Functional components + hooks
✔️ Prettier + ESLint for style
✔️ Conventional commits
✔️ Tests close to components
✔️ Docs inside `/docs` folder
```

---
