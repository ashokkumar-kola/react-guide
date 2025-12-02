# TIPS

## React State must be Immutable

```js
const[users. setUsers] = useState([])

function addUser(newUser){
    users.concat(newUser)
    setUsers(users)
}

<AddUser onSubmit={addUser} />
<Users users={users} />
```

## Dont use useState/useReducer for everything

- Server State
- URL State
- Local storage + Cookies

> Fetching data with `React Query` - render as you fetch vs fetch after component rendered
> Store URLs in `usePathname`

```js
const { date } = useQuery({
  queryKey: ['data'],
  queryFn: () => fetch('/api/data').then((res) => res.json()),
});
```

### Before using state - Check:

- Can it be computed each render
- Library that has that state
- Does it need to be rendered
  > If NO Then state

```js

```

## Derive Values without state

- No hooks needed
- use date directly
- renders when prop changes

```js
function Date({ date }) {
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    setFormatted(new Date(date).toLocaleDateString());
  }, [date]);

  return <p>Date: {formatted}</p>;
}
```

```js
function Date({ date }) {
  const [formatted, setFormatted] = new Date(date).toLocaleDateString();

  return <p>Date: {formatted}</p>;
}
```

## Compute Values without Effects

- If Expensive calculation
  - use useMemo

## Key Should be actually unique

crypto.randomUUID()

const data = items.map(item => {
return { ...item, id: crypto.randomUUID() }
})

## Dont leave out dependencies

- `stale closure`

useEffect

### Eject

```bash

# Creating a New Project
npx create-react-app my-app

# Starting the Development Server
npm start

# Adding Dependencies
npm install axios

# Ejecting from CRA (Not Recommended)
npm run eject


```
