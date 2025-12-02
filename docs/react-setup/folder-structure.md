# 📁 React + Vite Folder Structure

```
my-react-app/
│
├── 📄 index.html                 # Entry HTML file (Vite injects React here)
├── 📄 package.json               # Project dependencies & scripts
├── 📄 vite.config.js             # Vite configuration file
├── 📄 README.md                  # Project documentation
│
├── 📁 public/                    # Public static assets (served as-is)
│   └── favicon.ico
│
├── 📁 src/                       # Source code (everything React-related)
│   │
│   ├── main.jsx                  # Entry point (mounts React to DOM)
│   ├── App.jsx                   # Root component
│   │
│   ├── 📁 assets/                # Images, icons, fonts, etc.
│   │   └── logo.svg
│   │
│   ├── 📁 components/            # Reusable UI pieces (Buttons, Cards, etc.)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   │
│   ├── 📁 pages/                 # Page-level components (routes)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   │
│   ├── 📁 layouts/               # Optional: shared layouts (e.g. Navbar + Outlet)
│   │   └── MainLayout.jsx
│   │
│   ├── 📁 hooks/                 # Custom React hooks
│   │   └── useFetch.js
│   │
│   ├── 📁 context/               # React Context providers
│   │   └── ThemeContext.jsx
│   │
│   ├── 📁 styles/                # Global & modular CSS
│   │   ├── index.css
│   │   └── variables.css
│   │
│   ├── 📁 utils/                 # Helper functions, constants
│   │   └── formatDate.js
│   │
│   ├── 📁 services/              # API calls, data fetching
│   │   └── api.js
│   │
│   └── 📁 router/                # React Router setup (optional)
│       └── AppRouter.jsx
│
└── 📁 docs/                      # Documentation folder
    ├── react-setup.md            # Setup notes (commands, alternatives)
    ├── project-structure.md      # This file (folder structure)
    └── conventions.md            # Optional: naming / commit / code style
```
