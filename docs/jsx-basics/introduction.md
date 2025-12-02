# Introduction to JSX

JSX (JavaScript XML) is a syntax extension that lets you write UI elements using an HTML-like syntax inside JavaScript.  
React uses JSX to describe what the UI should look like.

## Basic Example

```jsx
const element = <h1>Hello, world!</h1>;
```

## Why JSX?

- More readable than `React.createElement()`
- Keeps markup + logic together
- Helps write declarative UI

## JSX is JavaScript

JSX expressions compile down to:

```jsx
React.createElement(type, props, children);
```

JSX is optional but widely used in React apps.

---

## Embedding Expressions in JSX

`````
You can embed JavaScript expressions inside JSX using `{}`.

## Variables

````jsx
const name = 'Alice';
<h1>Hello, {name}</h1>


## Expressions

```jsx
<p>2 + 2 = {2 + 2}</p>
`````

````

## Function Calls

```jsx
<p>{getUserName()}</p>
```

## JSX is an Expression

You can store JSX in a variable or return it from a function.

```jsx
function greet(user) {
  return <h1>Hello, {user.name}</h1>;
}
```

````

---

# ✅ 3. `jsx-basics/jsx-attributes.md`

````markdown
# JSX Attributes

JSX attributes look like HTML but follow JavaScript rules.

## camelCase Attributes

```jsx
<input type="text" tabIndex={0} />
```
````

## className Instead of class

```jsx
<div className="container"></div>
```

## Embedding JS Values

```jsx
<img src={profileUrl} alt={userName} />
```

## Boolean Attributes

```jsx
<button disabled>Click</button>
```

## Inline Styles

JSX uses objects for the `style` attribute:

```jsx
<div style={{ color: 'blue', fontSize: '20px' }}></div>
```

---

## ✅ Children in JSX

- JSX can contain nested elements, components, or dynamic content.

## Basic Nesting

```jsx
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>
```

## Passing Children to Components

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <p>This is inside the card.</p>
</Card>;
```

## Rendering Lists

Use `.map()` and include a `key`:

```jsx
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

## JSX Comments

```jsx
{
  /* This is a comment */
}
```

---

## ✅ JSX vs HTML

- JSX looks like HTML but has key differences.

### 1. JSX Requires a Single Root Element

HTML allows multiple. JSX does not.

```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

### 2. Attributes Use camelCase

```
- `class` → `className`
- `for` → `htmlFor`
- `onclick` → `onClick`
```

### 3. JavaScript Values Use {}

```jsx
<h1>{title}</h1>
```

### 4. Inline Styles Use Objects

```jsx
<div style={{ color: 'red' }}></div>
```

### 5. Self-Closing Tags

JSX requires explicit closing:

```jsx
<br />
<img />
```

### 6. Comments

```jsx
{
  /* Comment */
}
```

---
