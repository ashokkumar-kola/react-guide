# React Fundamentals

## React

A JavaScript library for building reusable UI components.

- Enables creating sharable UI logic
- Used across multiple platforms
  - Websites (with React DOM)
  - Mobile apps (with React Native)
  - Desktop apps (with Electron)
  - Server-rendered apps (with frameworks like Next.js)

---

## React DOM

The renderer that connects React to the browser.

- Specifically for building web applications
- Handles updating the DOM efficiently using the virtual DOM

---

## Babel

A JavaScript compiler.

- Converts JSX into standard JavaScript
- Transpiles modern JS (ES6+) to browser-compatible JS
- Works with React through presets like `@babel/preset-react`

---

# Common and Important Libraries Used in Real-World React Apps

These libraries are widely used in production-grade applications.

---

## Routing

### React Router

- Handles navigation, URLs, nested routes
- Essential for SPA structure

### Next.js (Framework)

- File-based routing
- SSR, SSG, API routes, image optimization
- Used in large-scale apps

---

## State Management

### Redux Toolkit

- Predictable global state
- Industry-standard for large apps

### Zustand

- Lightweight store with minimal boilerplate

### Recoil

- Simple and flexible state sharing

### Jotai

- Atom-based state management

### Context API (Built-in)

- Good for auth, theme, user preferences

---

## Data Fetching & Caching

### React Query (TanStack Query)

- Handles API caching, mutations, background sync
- Reduces boilerplate drastically

### SWR

- Minimal and clean data caching from Vercel

---

## UI Components / Styling

### Tailwind CSS

- Utility-first CSS
- Very popular in production apps

### MUI (Material UI)

- Rich component library

### Chakra UI

- Accessible and developer-friendly layout components

### Styled Components

- CSS-in-JS solution

---

## Forms

### React Hook Form

- Fast, lightweight, built for performance
- Most common form library in production apps

### Formik

- Mature and widely used in enterprise apps

---

## HTTP Clients

### Axios

- Common and easy-to-use HTTP client
- Supports interceptors

### Fetch API

- Native, lightweight alternative

---

## Testing

### Jest

- Standard testing framework

### React Testing Library

- Focuses on testing user behavior, not implementation

---

## Build Tools / Bundlers

### Vite

- Extremely fast dev server and build tool

### Webpack

- Traditional bundler, highly configurable

---

## Animation

### Framer Motion

- Powerful animation engine
- Smooth transitions and gestures

### React Spring

- Physics-based animations

---

## Internationalization (i18n)

### react-i18next

- Translation management for multi-language apps

---

## Charts / Visualizations

### Recharts

- Simple chart components
- Ideal for dashboards

### Chart.js (React wrapper: react-chartjs-2)

- Widely used charting library

---

## Form Validation

### Yup / Zod

- Schema-based validation
- Often used with React Hook Form

---

# Summary

React itself is just the UI layer.  
Most production apps depend on additional libraries for routing, state management, data fetching, forms, styling, testing, and animations.

This list covers the most commonly adopted and reliable tools used in real-world projects.

---
