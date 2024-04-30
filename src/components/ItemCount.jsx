import { useState } from "react"

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        if (stock > count) setCount(count + 1)
    }

    const handleDecrease = () => {
        if (count > 1) setCount(count - 1)
    }

    const handleAdd = () => {
        setCount(1);
        onAdd(count);
    }

    return (
        <div className="flex items-center">
            <button className="h-10 px-2 text-white rounded-l" onClick={handleDecrease}>-</button>
            <input value={count} className="h-10 w-16 text-center" readOnly />
            <button className="h-10 px-2 text-white rounded-r" onClick={handleIncrease}>+</button>
            <button className="h-10 px-4 text-white rounded ml-1" onClick={handleAdd}>🛒</button>
        </div>

    )
}