
# Functional Components

## Basic Functional Component
```jsx
// A simple functional component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

export default Welcome;
```

## Components with Props
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```


## Arrow Functions
```jsx
const Message = (props) => {
  return <p>The message is: {props.text}</p>;
};

export default Message;

// If a functional component only contains a return statement
const Display = (props) => <p>Value: {props.value}</p>;

export default Display;
```

## Returning null
```jsx
function ConditionalComponent(props) {
  if (props.isVisible) {
    return <p>This is visible!</p>;
  } else {
    return null;
  }
}

export default ConditionalComponent;
```

##



# Rendering UI

React elements - virtual DOM - actual DOM 

## Rendering with ReactDOM.render()
- `ReactDOM.render()`
- `ReactDOM.createRoot`

```jsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// ---

import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(<App />);
```

## Rendering Components within Components


## Dynamic Rendering

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
const root = createRoot(document.getElementById('root'));
root.render(<Mailbox unreadMessages={messages} />);

const noMessages = [];
const root2 = createRoot(document.getElementById('root2'));
root2.render(<Mailbox unreadMessages={noMessages} />);












## JSX Rules

- Single Root Element
  - React Fragment `<>...</>`

- JavaScript Expressions
  - embed JavaScript expressions - { }

- HTML Attributes vs. React Props

- Comments
  - `{/* ... */ }`
