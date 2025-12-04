# Tailwind CSS

## Install Tailwind CSS

- Install tailwindcss and @tailwindcss/vite via npm.

```bash
npm install tailwindcss @tailwindcss/vite
```

## Configure the vite plugin

- Add the @tailwindcss/vite plugin to your Vite configuration.

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

## Import Tailwind CSS

- Add an @import to your CSS file that imports Tailwind CSS.

```css
@import 'tailwindcss';
```
