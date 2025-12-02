# Project Structure Notes

This is a typical React + Vite project layout.  
Best practices, extra notes, and key details developers should know.

---

## 📝 .env

Environment variables for API keys and configuration.

- Loaded only on the server side unless prefixed with `VITE_`
- Example: `VITE_API_URL=https://example.com/api`
- Do not commit `.env` files

---

## 📝 .env.example

Template showing required environment variables.  
Useful for onboarding and CI.

---

## 📝 .gitignore

Files excluded from Git:

- node_modules
- .env
- dist
- .DS_Store (macOS)
- log files

Best practice: keep `.env*` patterns included.

---

## 📝 vite.config.js

Vite configuration file.  
Used for:

- customizing build process
- adding plugins (React plugin, ESLint plugin, etc.)
- aliasing paths (e.g., `@/components`)
- configuring dev server (CORS, proxies, ports)
- optimizing dependencies

Example:

- `server.proxy` helps when working with backend APIs during development.

---

## 📝 package.json

Project metadata and settings.  
Includes:

- project name and version
- scripts
- dependencies
- devDependencies
- package type ("module" for ES modules)

Key sections:

- `"scripts"` controls build, dev, lint commands
- `"engines"` can define required Node version

---

## 📝 package-lock.json

Generated automatically.  
Ensures consistent dependency versions across machines.  
Should not be edited manually.

---

## 📝 index.html

Project’s HTML entry.  
Contains:

- root div for mounting React
- script tag injected by Vite
- metadata (title, favicon)

Important:

- You can include fonts, meta tags, analytics scripts here.

---

## 📝 eslint

Linting config to ensure consistent code style.  
May include:

- custom rules
- formatting rules
- React hooks rules
- TypeScript rules (if using TS)

Often paired with Prettier.

---

## 📝 jsconfig.json / tsconfig.json

(Optional but common)  
Used for path aliases and editor IntelliSense.  
Important when enabling shortcuts like `@/components`.

---

# Public Folder

## 🗂️ public/

Static assets served directly without processing.  
Files here are copied to the root of the production build.  
Examples:

- favicon
- robots.txt
- static images that must retain names

Note:  
Use `/public` rarely unless necessary; prefer `/src/assets`.

---

# Source Folder (src)

## 🗂️ src/

Main application code.

### 📝 main.jsx

Entry point of the React app.

- Imports React and root component
- Renders `<App />` into root div
- Often includes global providers (Router, Redux, QueryClient)

### 📝 App.jsx

Main UI component.  
Can include:

- routing
- layout structure
- global wrappers (theme, context)

### 📝 index.css

Global CSS for resets, variables, utility styles.

### 🗂️ assets/

Images, fonts, SVGs, and media used in components.  
Vite fingerprinting automatically hashes file names.

### 📝 App.css

Styles specific to the App component.  
Can be replaced by CSS modules or styled-components.

---

# Additional Recommended Folders

### 🗂️ components/

Reusable UI components.

### 🗂️ pages/

Page-level components, often used with React Router.

### 🗂️ hooks/

Custom hooks for business logic.

### 🗂️ utils/

Helper functions and constants.

### 🗂️ services/

API calls and network-related logic.

### 🗂️ context/

React Context providers.

### 🗂️ styles/

Global theme files, variables, SCSS, or utility CSS.

---

# Additional Important Notes

### 1. Module Resolution

Vite supports path aliases for cleaner imports.  
Configure via `vite.config.js`.

### 2. Asset Handling

- Images < 4KB may be inlined as base64
- Importing an image returns an optimized URL

### 3. Environment Variables

- Must be prefixed with `VITE_` to be accessible in client code
- Different files for stages: `.env.development`, `.env.production`

### 4. HMR (Hot Module Replacement)

Vite's dev server updates components instantly without refreshing.

### 5. Build Output

Vite outputs production files into `/dist`.

### 6. Browser Support

Vite targets modern browsers using ES modules.  
Legacy support requires a plugin.

### 7. Official Documentation Reference

- React: react.dev
- Vite: vitejs.dev
- ESLint: eslint.org

---
