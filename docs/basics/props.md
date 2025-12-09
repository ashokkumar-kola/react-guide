# Props in Functional Components

## Core Concepts

- Props = immutable data flow (parent → child)
- Always read-only inside receiving component
- Any valid JS value: string, number, object, function, JSX, symbol
- `children` is a special reserved prop

```tsx
const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);
```

## All Ways to Pass Props

| Method                 | Syntax Example                                    | Use Case             |
| ---------------------- | ------------------------------------------------- | -------------------- |
| Literal values         | `<User name="Sara" age={25} />`                   | Simple data          |
| Variables              | `<User user={currentUser} />`                     | Dynamic values       |
| Spread operator        | `<User {...userData} />`                          | Bulk props           |
| Conditional spread     | `<User {...(isAdmin && { role: 'admin' })} />`    | Optional props       |
| Boolean shorthand      | `<Input required disabled />`                     | HTML-like attributes |
| Null/undefined removal | `<Input {...(value == null ? {} : { value })} />` | Avoid passing null   |

## Destructuring Patterns

```tsx
// 1. Basic
const Button = ({ label, onClick }) => (...)

// 2. With defaults
const Button = ({ label = 'Submit', onClick = () => {} }) => (...)

// 3. Nested destructuring
const UserCard = ({ user: { name, profile: { avatar } } }) => (...)

// 4. Rest props (forward to DOM)
const Input = ({ className, ...rest }) => (
  <input className={`input ${className}`} {...rest} />
);
```

## Default Props (2025 Best Practices)

```tsx
// Preferred: ES6 parameter defaults
const Avatar = ({ size = 'md', src }: { size?: 'sm' | 'md' | 'lg'; src: string }) => (...)

// Legacy (still works but not needed)
Component.defaultProps = { size: 'md' }; // ← avoid in new code
```

## Type Safety (TypeScript)

```tsx
interface Props {
  // Required
  id: string;
  // Optional
  label?: string;
  // Literal union
  variant?: 'primary' | 'secondary' | 'ghost';
  // Function type
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // Generic children
  children?: React.ReactNode;
  // Complex objects
  user: { name: string; avatar?: string | null };
}

const Button: React.FC<Props> = ({
  variant = 'primary',
  onClick,
  children,
  ...rest
}) => (
  <button className={variant} onClick={onClick} {...rest}>
    {children}
  </button>
);
```

## Common Gotchas & Anti-Patterns

| Problem                 | Why It Breaks                                 | Correct Fix                                   |
| ----------------------- | --------------------------------------------- | --------------------------------------------- |
| Inline object           | `{ style={{ color: 'red' }} }` → new ref      | Move to variable or useMemo                   |
| Inline function         | `onClick={() => doSomething(id)}` → re-render | Pass `onClick` wrapped in useCallback         |
| Passing index as key    | `key={index}` → wrong reconciliation          | Use stable ID                                 |
| Mutating props          | `props.user.name = 'x'` → bug                 | Clone or use state                            |
| Over-drilling           | 5+ levels deep                                | Use Context or state management               |
| undefined vs not passed | Default props ignored when `undefined` passed | Use parameter default instead of defaultProps |

## Performance Optimization

```tsx
// Prevent re-renders when props are referentially unstable
const ListItem = React.memo(function ListItem({ user, onSelect }) {
  const handleClick = useCallback(() => onSelect(user.id), [user.id]);

  return <div onClick={handleClick}>{user.name}</div>;
});

// Custom comparator (rarely needed)
const areEqual = (prev, next) =>
  prev.id === next.id && prev.value === next.value;
export default React.memo(Component, areEqual);
```

## Special Prop Patterns

```tsx
// Render props
<DataProvider render={data => <Table data={data} />} />

// Function as child (children as function)
<Mouse>{({ x, y }) => <Cursor x={x} y={y} />}</Mouse>

// CloneElement pattern (advanced)
{React.Children.map(children, child =>
  React.cloneElement(child, { onClose })
)}
```

## Forwarding Props & Refs

```tsx
import { forwardRef, ForwardedRef } from 'react';

const FancyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref: ForwardedRef<HTMLInputElement>) => (
    <input ref={ref} className={`fancy ${className}`} {...props} />
  )
);
```

## Real-World Example (Production Ready)

```tsx
import { memo, MouseEvent } from 'react';

type CardProps = {
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
  onClick?: (id: string) => void;
  id: string;
  variant?: 'elevated' | 'outlined';
};

const Card = memo(
  ({
    title,
    description,
    image,
    tags = [],
    onClick,
    id,
    variant = 'elevated',
  }: CardProps) => {
    const handleClick = () => onClick?.(id);

    return (
      <article className={`card ${variant}`} onClick={handleClick}>
        {image && <img src={image} alt={title} />}
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
    );
  }
);

Card.displayName = 'Card';
```

## References

- Official: https://react.dev/learn/passing-props-to-a-component
- TypeScript + React: https://react-typescript-cheatsheet.netlify.app
- Advanced Patterns: https://react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-render-props
- React.memo docs: https://react.dev/reference/react/memo

Mastered props → master React data flow.
