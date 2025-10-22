
## RENDERING LISTS

### Basic List Rendering
```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);
```

### Inline Mapping
```jsx
{numbers.map((number) =>
    <li>{number}</li>
)}
```

### Rendering Lists of Objects
```jsx
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Keyboard', price: 75 },
  { id: 3, name: 'Mouse', price: 25 },
];

// Accessing Object Properties
{products.map((product) => (
    <li>
        {product.name} - ${product.price}
    </li>
))}

// Extracting List Items into Separate Components
{products.map((product) => (
    <Product
        key={product.id} // Important: Add a key prop
        name={product.name}
        price={product.price}
    />
))}
```

## KEYS FOR EFFICIENT RENDERING

### Using IDs from a database
{products.map((product) => (
    <Product key={product.id} name={product.name} />
))}

### Using Index as a Key (Anti-Pattern)
{products.map((product, index) => (
    <Product key={index} name={product.name} />
))}

### Generating Unique IDs
import { v4 as uuidv4 } from 'uuid'; 
{ id: uuidv4() }



## UPDATING LISTS (ADDING, REMOVING, MODIFYING)
```jsx
// AddItemToEnd
const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
};
// AddItemToBeginning
const addItem = () => {
    setItems([`Item 0`, ...items]);
};
// AddItemAtIndex
const addItemAtIndex = (index, newItem) => {
    setItems([...items.slice(0, index), newItem, ...items.slice(index)]);
};

// RemoveItemByValue
const removeItem = (value) => {
    setItems(items.filter((item) => item !== value));
};
// RemoveItemByIndex
const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
};

// ModifyItemByValue
const modifyItem = (oldValue, newValue) => {
    setItems(
        items.map((item) => (item === oldValue ? newValue : item))
    );
};
// ModifyItemByIndex
const modifyItem = (indexToModify, newValue) => {
    setItems(
        items.map((item, index) => (index === indexToModify ? newValue : item))
    );
};
```

## FILTERING
```jsx
import React, { useState } from 'react';

function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

## SORTING

### Sort numbers alphabetically (incorrect for numeric sorting)
```jsx
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

numbers.sort();
// Output: [1, 1, 2, 3, 4, 5, 6, 9] (as strings)
```

### Sorting Numbers:
    - A negative value if a should come before b.
    - A positive value if a should come after b.
    - Zero if a and b are equal.
```jsx
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// Sort numbers in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

// Sort numbers in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 6, 5, 4, 3, 2, 1, 1]
```

### Dynamic Sorting Based on User Selection
```jsx
import React, { useState } from 'react';

function ProductList({ products }) {
  const [sortBy, setSortBy] = useState('name'); // Default sort by name

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <ul>
        {sortedProducts.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

## OPTIMIZATION

### Virtualized List (Windowing)
```jsx
// Fixed Size Items
import React from 'react';
import { FixedSizeList } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>
    Row {index}
  </div>
);

const ExampleList = ({ itemCount }) => (
  <FixedSizeList
    height={600} // Total height of the list
    width={400}  // Total width of the list
    itemSize={50} // Height of each row
    itemCount={itemCount} // Total number of rows
  >
    {Row}
  </FixedSizeList>
);

// Variable Size Items
import React from 'react';
import { VariableSizeList } from 'react-window';

const getItemSize = index => {
  // Logic to determine the height of the item at the given index
  return 50 + (index % 3) * 20; // Example: Varying heights
};

const Row = ({ index, style }) => (
  <div style={style}>
    Row {index} - Height: {getItemSize(index)}px
  </div>
);

const ExampleVariableList = ({ itemCount }) => (
  <VariableSizeList
    height={600}
    width={400}
    itemCount={itemCount}
    itemSize={getItemSize} // Pass the function to calculate item size
  >
    {Row}
  </VariableSizeList>
);
```

### Memoized List Items
```jsx
const ListItem = React.memo(({ item }) => {
  console.log(`Rendering ListItem with id: ${item.id}`);
  return (
    <div>
      {item.name} - {item.description}
    </div>
  );
});
```

### Using Immutable.js
```jsx
import { List, Map } from 'immutable';

// Creating an immutable list
const myList = List([1, 2, 3]);

// Adding an item to the list (returns a new list)
const newList = myList.push(4);

console.log(myList.toJS()); // Output: [1, 2, 3] (original list is unchanged)
console.log(newList.toJS()); // Output: [1, 2, 3, 4] (new list with the added item)

// Creating an immutable map (object)
const myMap = Map({ name: 'John', age: 30 });

// Updating a value in the map (returns a new map)
const newMap = myMap.set('age', 31);

console.log(myMap.toJS()); // Output: { name: 'John', age: 30 } (original map is unchanged)
console.log(newMap.toJS()); // Output: { name: 'John', age: 31 } (new map with the updated value)
```

### Avoid Inline Functions in Render Methods
```jsx
// Bad
const MyComponent = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => console.log(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

// Good
const MyComponent = ({ items }) => {
  const handleClick = id => {
    console.log(id);
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
```

### Debouncing or Throttling Updates

### Code Splitting

