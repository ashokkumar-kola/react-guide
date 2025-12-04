// import React, { useState, useEffect } from 'react'
// import "prismjs/themes/prism-tomorrow.css";
// import Prism from "prismjs";

// const Playground = () => {
//   const steps = [
//     `<div class="p-4 text-gray-800">Hello</div>`,
//     `<div class="p-4 bg-blue-500 text-white rounded-lg">Hello Tailwind</div>`,
//     `<div class="p-6 bg-green-500 text-white rounded-xl shadow-xl">Live Preview!</div>`,
//   ];

//   const [code, setCode] = useState(steps[0]);
//   const [stepIndex, setStepIndex] = useState(0);

//   useEffect(() => {
//     // Runs once on page load
//     const interval = setInterval(() => {
//       setStepIndex(prev => {
//         if (prev === steps.length - 1) {
//           clearInterval(interval);
//           return prev;
//         }
//         return prev + 1;
//       });
//     }, 1200);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setCode(steps[stepIndex]);
//   }, [stepIndex]);

// //   useEffect(() => {
// //     Prism.highlightAll();
// //     }, [code]);

//   return (
//     <div className="grid grid-cols-2 gap-6">
      
//       {/* CODE BLOCK */}
//       <pre className="bg-gray-900 text-green-300 p-4 rounded-xl text-sm">
//         <code>{code}</code>
//       </pre>

//       {/* PREVIEW BLOCK */}
//       <div
//         className="border rounded-xl p-4 bg-white"
//         dangerouslySetInnerHTML={{ __html: code }}
//       ></div>

//     </div>
//   );
// }

// export default Playground











import React, { useEffect, useState, useRef } from "react";

// LivePlayground.jsx
// Single-file React component that provides a live HTML/CSS/JS playground
// Uses Tailwind utility classes for styling. Default-exported component so it can be previewed.

export default function LivePlayground() {
  const defaultHTML = `
<div class="p-6">
  <header class="mb-6">
    <h1 class="text-4xl font-bold tracking-tight">Rapidly build modern websites</h1>
    <p class="text-gray-600">A tiny demo of composing UI directly in markup.</p>
  </header>

  <section class="bg-white rounded-2xl p-4 shadow-lg">
    <div class="flex items-center gap-4">
      <img src="https://via.placeholder.com/96" alt="cover" class="w-24 h-24 rounded-md shadow" />
      <div>
        <div class="text-xl font-medium">Class Warfare</div>
        <div class="text-sky-500 font-semibold">The Anti-Patterns</div>
        <div class="text-sm text-gray-500">No. 4 · 2025</div>
      </div>
    </div>

    <pre class="mt-4 p-3 bg-gray-50 rounded text-sm overflow-auto"><code>&lt;div class=\"flex gap-6 p-7 rounded-2xl\"&gt;...&lt;/div&gt;</code></pre>
  </section>
</div>
`;

  const defaultCSS = `
/* sample CSS to show how you can augment Tailwind-like classes */
body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
.container { max-width: 980px; margin: 32px auto; }
`;

  const defaultJS = `
// small script to show interactivity inside the preview
document.addEventListener('click', (e) => {
  if (e.target.matches('[data-action="toast"]')) {
    const t = document.createElement('div');
    t.textContent = 'Button clicked!';
    t.style = 'position:fixed;right:16px;bottom:16px;background:#111;color:white;padding:8px 12px;border-radius:8px;';
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1500);
  }
});
`;

  const [html, setHtml] = useState(defaultHTML);
  const [css, setCss] = useState(defaultCSS);
  const [js, setJs] = useState(defaultJS);
  const [activeTab, setActiveTab] = useState('html');
  const [srcDoc, setSrcDoc] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    // debounce updates so typing is smooth
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const full = `
<!doctype html>
<html>
<head>
<meta charset=\"utf-8\" />
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
<link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\"> 
<style>\n${css}\n</style>
</head>
<body class=\"bg-gray-50\"> 
  <div class=\"container\">\n${html}\n  </div>
<script>\n${js}\n</script>
</body>
</html>
`;
      setSrcDoc(full);
    }, 300);

    return () => clearTimeout(timeoutRef.current);
  }, [html, css, js]);

  function runNow() {
    // immediate run
    const full = `<!doctype html><html><head><meta charset=\"utf-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /><link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\"> <style>\n${css}\n</style></head><body class=\"bg-gray-50\"><div class=\"container\">${html}</div><script>\n${js}\n</script></body></html>`;
    setSrcDoc(full);
  }

  function downloadProject() {
    const blob = new Blob([
      `<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\" />\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n<link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\">\n<style>\n${css}\n</style>\n</head>\n<body>\n<div class=\"container\">\n${html}\n</div>\n<script>\n${js}\n</script>\n</body>\n</html>`
    ], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'playground.html';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Live Code Playground</h2>
            <p className="text-sm text-gray-600">Edit HTML, CSS & JS and see a live preview below.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={runNow} className="px-3 py-2 rounded-full bg-black text-white text-sm">Run</button>
            <button onClick={downloadProject} className="px-3 py-2 rounded-full border border-gray-200 text-sm">Download</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow p-2">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <nav className="flex gap-2">
                    <button onClick={() => setActiveTab('html')} className={`px-3 py-1 rounded-full text-sm ${activeTab === 'html' ? 'bg-black text-white' : 'text-gray-600'}`}>HTML</button>
                    <button onClick={() => setActiveTab('css')} className={`px-3 py-1 rounded-full text-sm ${activeTab === 'css' ? 'bg-black text-white' : 'text-gray-600'}`}>CSS</button>
                    <button onClick={() => setActiveTab('js')} className={`px-3 py-1 rounded-full text-sm ${activeTab === 'js' ? 'bg-black text-white' : 'text-gray-600'}`}>JS</button>
                  </nav>
                </div>
                <div className="text-xs text-gray-500">Auto-save enabled</div>
              </div>

              <div className="mt-3">
                {activeTab === 'html' && (
                  <textarea value={html} onChange={(e) => setHtml(e.target.value)} className="w-full h-56 p-3 font-mono text-sm bg-gray-50 rounded resize-none outline-none" />
                )}
                {activeTab === 'css' && (
                  <textarea value={css} onChange={(e) => setCss(e.target.value)} className="w-full h-56 p-3 font-mono text-sm bg-gray-50 rounded resize-none outline-none" />
                )}
                {activeTab === 'js' && (
                  <textarea value={js} onChange={(e) => setJs(e.target.value)} className="w-full h-56 p-3 font-mono text-sm bg-gray-50 rounded resize-none outline-none" />
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => { setHtml(defaultHTML); setCss(defaultCSS); setJs(defaultJS); }} className="px-3 py-2 rounded-md border text-sm">Reset</button>
              <button onClick={() => { navigator.clipboard?.writeText(activeTab === 'html' ? html : activeTab === 'css' ? css : js); }} className="px-3 py-2 rounded-md border text-sm">Copy</button>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow overflow-hidden h-full">
              <div className="flex items-center justify-between px-4 py-2 border-b">
                <div className="text-sm text-gray-600">Live Preview</div>
                <div className="text-xs text-gray-500">Sandboxed iframe</div>
              </div>
              <iframe
                title="preview"
                srcDoc={srcDoc}
                sandbox="allow-scripts allow-same-origin"
                style={{ width: '100%', height: 420, border: 0 }}
              />
            </div>
          </div>
        </div>

        <footer className="mt-6 text-xs text-gray-500">Tip: Use small snippets first — then compose larger UI blocks in the HTML editor.</footer>
      </div>
    </div>
  );
}
