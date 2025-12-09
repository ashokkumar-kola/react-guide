# Rendering in React (2025 Definitive Guide)

## Core Philosophy

- Declarative → describe **what** UI should look like
- Imperative → forbidden (no direct DOM manipulation)
- React decides **when** & **how** to update DOM

## Key Terminology

- **Rendering** → React calling your component function
- **Virtual DOM (VDOM)** → lightweight in-memory tree of React elements
- **Reconciliation** → diffing algorithm (old VDOM vs new VDOM)
- **Commit phase** → actual DOM mutations
- **Browser paint** → final screen drawing (outside React’s control)

## The 3 Phases of Every Update

| Phase             | What Happens                                       | Triggered By                                 | DOM Changed? |
| ----------------- | -------------------------------------------------- | -------------------------------------------- | ------------ |
| 1. Render Trigger | Queue render                                       | Initial mount or setState / useState updater | No           |
| 2. Rendering      | React calls your components → builds new VDOM tree | Every trigger                                | No           |
| 3. Commit         | React applies minimal DOM changes                  | Only if VDOM differs                         | Yes          |

### Phase 1: Trigger a Render

Two root causes only:

- **Initial render** → `root.render(<App />)`
- **Re-render** → any `setState()` or state updater in component or ancestor

### Phase 2: Rendering (React Calls Your Components)

- Starts at root or component that changed state
- Recursive → parent → children → grandchildren…
- Always **pure function**:
  - Same props/state → same JSX
  - No side effects (no API calls, no mutations)
- Strict Mode (dev) → calls render **twice** to catch impurities
- Result → new virtual DOM tree (React elements)

```tsx
// This runs on every render (initial + re-renders)
const Counter = ({ count }) => {
  console.log('Counter rendered'); // ← logs on every phase 2
  return <div>{count}</div>;
};
```

### Phase 3: Commit (DOM Updates)

- React compares previous VDOM ↔ new VDOM
- Calculates minimal operations (diff)
- Applies changes:
  - `appendChild`, `removeChild`, `textContent`, attributes, etc.
- Input cursor / scroll position preserved when possible
- After commit → browser repaints screen

```tsx
// Example: only text node inside <h1> updates
<h1>Time: {new Date().toLocaleTimeString()}</h1>
// → React updates only text, not entire <h1>
```

## Reconciliation Rules (How Diff Works)

- Elements of different types → entire subtree unmounted
- Same type + same key → React reconciles in place
- `key` must be stable, unique, predictable
- No key → fallback to index (bad for lists)

## Important Truths (2025)

| Statement                                 | Reality                                               |
| ----------------------------------------- | ----------------------------------------------------- |
| "Rendering is expensive"                  | False → rendering is fast; **commit** can be slow     |
| "setState always causes DOM update"       | False → only if output JSX differs                    |
| "I can mutate DOM in render"              | Never → render must stay pure                         |
| "useEffect runs after render"             | Yes → after paint (except useLayoutEffect)            |
| "React batches updates"                   | Yes → multiple setState in same event → single render |
| "Concurrent Mode can interrupt rendering" | Yes → low-priority renders can be paused/resumed      |

## Visual Flow

```
Trigger → React renders components → Build new VDOM
        ↓
        Reconciliation (diff)
        ↓
        Commit → minimal DOM mutations
        ↓
        Browser paint → pixels on screen
```

## Quick Cheat Sheet

```tsx
// 1. Trigger
setCount((c) => c + 1); // queues render

// 2. Render phase (pure!)
function Component() {
  return <div>Hello {name}</div>; // runs again
}

// 3. Commit phase
// → React updates only changed text nodes / attributes
```

## References

- https://react.dev/learn/render-and-commit
- https://react.dev/learn/reacting-to-input-with-state#step-3-react-commits-changes-to-the-dom
- https://react.dev/reference/react/Component#rendering

Master this cycle → master React performance.

```

```
