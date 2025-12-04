Great — here is the **full Installation & Setup section**, written in clean MkDocs-ready Markdown.
All files are detailed, beginner → advanced, include examples, best practices, catch-points, and warnings.

---

# 📄 **installation/installation.md**

````md
# Installation

Tailwind CSS can be installed in multiple ways depending on the tech stack.  
This guide breaks down installation via:

- CDN (quick prototyping)
- npm (recommended)
- Framework setups (Next.js, Vite, React, Vue, Angular)

---

# 🚀 1. Install Tailwind via CDN (Fastest for Prototyping)

Use this method **only** for quick experiments or CodePen-style demos.

```html
<script src="https://cdn.tailwindcss.com"></script>
```
````

Optional: Inline config

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#4f46e5',
        },
      },
    },
  };
</script>
```

> ⚠️ **Not recommended for production.**
> No PurgeCSS → huge CSS size.
> No custom configuration.
> No JIT mode.

---

# 📦 2. Install using npm (Recommended)

### Step 1 — Create project

```bash
mkdir my-project
cd my-project
npm init -y
```

### Step 2 — Install Tailwind + PostCSS + Autoprefixer

```bash
npm install tailwindcss postcss autoprefixer
```

### Step 3 — Create config files

```bash
npx tailwindcss init -p
```

This generates:

```
tailwind.config.js
postcss.config.js
```

---

# 📌 3. Add Tailwind to your CSS

Create `src/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# 🔧 4. Configure Template Paths (Important)

In `tailwind.config.js`:

```js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

> ⚠️ **Catch Point:**
> If content paths are wrong, **Tailwind classes will not apply** or will be missing after build.

---

# 🛠 5. Build CSS (Development Mode)

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Include in HTML:

```html
<link rel="stylesheet" href="./dist/output.css" />
```

---

# ⚡ 6. Installing Tailwind in Popular Frameworks

---

## 🟦 Next.js

```bash
npx create-next-app@latest my-app
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Content paths:

```js
content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'];
```

Add Tailwind to `globals.css`.

---

## 🟨 Vite (React, Vue, Svelte)

```bash
npm create vite@latest my-app
cd my-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 🟦 React (CRA)

```bash
npx create-react-app my-app
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Content paths:

```js
content: ['./src/**/*.{js,jsx,ts,tsx}'];
```

---

## 🟧 Angular

```bash
ng new my-app
cd my-app
ng add @ngneat/tailwind
```

---

# 🎯 Summary

- CDN = quick prototype
- npm = full power + customization
- Frameworks require template paths
- `tailwind.config.js` is core for extending themes

Next: **Configuration Basics (config.md)**

````

---

# 📄 **installation/config.md**

```md
# Tailwind Configuration (tailwind.config.js)

The `tailwind.config.js` file controls theme customization, plugins, variants, dark mode, and paths.
Understanding this file is essential for advanced Tailwind usage.

---

# 🏗 Basic Structure

```js
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},
  },

  plugins: [],
};
````

---

# 🔹 content

Defines files where Tailwind should scan for class names.

```js
content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx,vue}'];
```

> ⚠️ **If you forget to include a directory, Tailwind will purge required styles.**

---

# 🔹 theme.extend

Use **extend**, not override.

```js
theme: {
  extend: {
    colors: {
      primary: "#4f46e5",
      brand: {
        light: "#c7d2fe",
        DEFAULT: "#6366f1",
        dark: "#4338ca"
      }
    },
    spacing: {
      128: "32rem",
      144: "36rem"
    },
  },
}
```

---

# 🎨 Custom Fonts

```js
extend: {
  fontFamily: {
    inter: ["Inter", "sans-serif"],
  },
}
```

Usage:

```html
<p class="font-inter">Hello</p>
```

---

# 🌑 Dark Mode

```js
darkMode: 'class';
```

Usage:

```html
<html class="dark"></html>
```

Or toggle via JS.

---

# 📦 Plugins

```js
plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')];
```

---

# 🧩 Default Theme Reference

You can view the full Tailwind theme:

```bash
npx tailwindcss theme
```

---

# 🎯 Best Practices

- Always use **extend** instead of replacing Tailwind defaults.
- Store colors and spacing in variables for consistency.
- Avoid over-expanding your config file.
- Group related config in objects for readability.

---

Next: **PostCSS & PurgeCSS (postcss-purgecss.md)**

````

---

# 📄 **installation/postcss-purgecss.md**

```md
# PostCSS, PurgeCSS, and Tailwind JIT Explained

Tailwind relies on PostCSS for processing, and uses a purge-like mechanism to remove unused CSS.

---

# 🧩 What is PostCSS?

A CSS processor that handles tasks like:

- autoprefixing
- Tailwind processing
- minification

Your `postcss.config.js` will look like:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
````

---

# 🧹 Purging Unused CSS

Before Tailwind v3, PurgeCSS was required.
Now Tailwind uses **content scanning + JIT engine**, automatically removing unused classes.

> ⚠️ If classes do not appear in content paths → they are removed.

---

# ✨ JIT Mode (Now Always Enabled)

JIT compiles CSS **on-demand** and offers:

- instant builds
- arbitrary values (`mt-[23px]`)
- tiny production output

---

# 🧱 Safelisting (Must-Know)

Sometimes you generate dynamic class names in React/Vue, e.g.:

```jsx
<div className={`bg-${status}-500`}></div>
```

Tailwind **cannot detect** these dynamic class names.

Solution:

```js
safelist: [
  { pattern: /bg-(red|green|blue)-(500|600)/ }
],
```

---

# 🧪 Example: Production Build

```bash
NODE_ENV=production npx tailwindcss -o dist/output.css --minify
```

---

# ⚠️ Common Pitfalls

- Class names constructed as strings will be purged.
- Missing paths → utilities disappear.
- Do not integrate old PurgeCSS plugins; Tailwind already handles purging.

---

Next: **Common Setup Pitfalls (pitfalls.md)**

````

---

# 📄 **installation/pitfalls.md**

```md
# Setup Pitfalls

Tailwind is powerful — but beginners often face setup issues.
Here are the most common ones and how to fix them.

---

# ❌ 1. Wrong Content Paths

Problem:

```js
content: ["./src/*.html"]
````

This **excludes nested folders** → Tailwind purges everything.

Correct:

```js
content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'];
```

---

# ❌ 2. CSS File Not Included

Make sure this file exists and is imported:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Common mistake:

```html
<link href="input.css" />
```

Should be:

```html
<link rel="stylesheet" href="./dist/output.css" />
```

---

# ❌ 3. Missing PostCSS Plugins

`postcss.config.js` must include `tailwindcss` and `autoprefixer`.

---

# ❌ 4. Using Tailwind CDN in Production

This produces:

- Large bundle sizes
- No purging
- No custom config

---

# ❌ 5. Dynamic Class Names Not Detected

Example:

```jsx
<div className={`bg-${color}-500`}></div>
```

Fix:

```js
safelist: [/bg-(red|blue|green)-(500|600)/];
```

---

# ❌ 6. Tailwind Not Rebuilding (Watch Not Working)

Caused by:

- Wrong paths
- Wrong `-i` and `-o`
- File inside ignored directory

---

# ❌ 7. Overusing @apply

Bad:

```css
.btn {
  @apply px-4 py-2 bg-blue-500 text-white font-bold rounded shadow;
}
```

> ⚠️ This recreates Bootstrap-style CSS → defeats utility-first purpose.

Only apply **layout-level** patterns.

---

# 🎯 Summary

- Correct paths are essential
- Avoid dynamic string class names
- Do not abuse `@apply`
- Ensure proper PostCSS setup

```

```
