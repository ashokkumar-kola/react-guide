- utility first

component libraries
shot cn

JIT just in time

break points

directives
@import
@theme
@source
@variant
@utility
@apply
@custom-variant
@reference

base
components
utilities
layer

```bash
📌 Step 1 — Install MkDocs + Material
pip install mkdocs-material mkdocs-minify-plugin

📌 Step 2 — Add Tailwind runtime (browser-only)

Create:

docs/javascripts/tailwind-runtime.js

Paste:

// Minimal Tailwind Runtime for MkDocs Material
document.addEventListener("DOMContentLoaded", () => {
const script = document.createElement("script");
script.src = "https://cdn.tailwindcss.com";
document.head.appendChild(script);
});

⚠️ This loads Tailwind just-in-time (JIT) so your Markdown can use Tailwind classes instantly.

📌 Step 3 — Create Tailwind CSS file

Create:

docs/stylesheets/tailwind.css

Add basic layers (so Material styles stay intact):

@tailwind base;
@tailwind components;
@tailwind utilities;

/_ Override MkDocs Material spacing _/
.md-content {
@apply prose prose-indigo max-w-none;
}

/_ Headings _/
.md-content h1 {
@apply text-4xl font-bold mt-8 mb-4;
}
.md-content h2 {
@apply text-3xl font-semibold mt-6 mb-3;
}
.md-content h3 {
@apply text-2xl font-semibold mt-4 mb-2;
}

/_ Code blocks _/
code, pre {
@apply rounded-md;
}

/_ Tables _/
table {
@apply w-full border border-gray-300;
}

📌 Step 4 — Optional: Add custom enhancements

Create:

docs/stylesheets/custom.css

Example enhancements:

/_ Smooth link hover _/
.md-content a:hover {
@apply text-teal-600 transition-colors;
}

/_ Cards for examples _/
.tailwind-card {
@apply p-6 rounded-2xl shadow-md bg-white border border-gray-200;
}
```
