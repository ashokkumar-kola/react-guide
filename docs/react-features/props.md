
# Props: Passing Data from Parent to Child Components

## Understanding Props in React
- read-only values passed from a parent component to a child component

## Passing Different Data Types
- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions
- JSX (other components)

## Prop Naming Conventions
- camelCase (e.g., userName)

## Default Props

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.defaultProps = {
  name: "Guest",
};

    ### Using Default Props with Destructuring
    function Greeting({ name = "Guest" }) {
        return <h1>Hello, {name}!</h1>;
    }

## Prop Validation with PropTypes
```bash
npm install prop-types
```
```jsx
import PropTypes from 'prop-types';

function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

function App() {
  return (
    <UserProfile name={123} age="thirty" />; //This will log an error
  );
}

export default App;
```

## Common PropTypes

PropTypes.string: For strings.
PropTypes.number: For numbers.
PropTypes.bool: For booleans.
PropTypes.array: For arrays.
PropTypes.object: For objects.
PropTypes.func: For functions.
PropTypes.symbol: For symbols.
PropTypes.node: For anything that can be rendered (numbers, strings, elements or an array containing these types).
PropTypes.element: For React elements.
PropTypes.oneOf(['value1', 'value2']): For restricting values to a specific set.
PropTypes.oneOfType([PropTypes.string, PropTypes.number]): For allowing multiple types.
PropTypes.arrayOf(PropTypes.number): An array of a certain type.
PropTypes.shape({ name: PropTypes.string, age: PropTypes.number }): An object with a specific shape.
PropTypes.instanceOf(MyClass): An instance of a class.
PropTypes.isRequired: To mark a prop as required.


## Children Prop
```jsx
function Card(props) {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card Content</p>
    </Card>
  );
}

export default App;
```


## Function as a Child Prop (Render Props)
```jsx
function DataProvider({ render }) {
  const data = [1, 2, 3, 4, 5];
  return render(data);
}

function App() {
  return (
    <DataProvider
      render={(data) => (
        <ul>
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    />
  );
}

export default App;
```


## Props and Immutability
- read-only
- 
























































