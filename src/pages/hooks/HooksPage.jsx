import React from 'react'
import useCustomHook from "./custom/useLocalStorage"
import useUpdateLogger from './custom/useUpdateLogger';

export default function HooksPage() {
    const [name, setName] = useCustomHook("name", "Guest")
    useUpdateLogger(name);

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <>
            <div>Hooks Page</div>

            <div>
                <h1>Hello, {name}!</h1>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
            </div>
        </>
    )
}
