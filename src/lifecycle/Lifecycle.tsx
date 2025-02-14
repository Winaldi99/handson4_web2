import React, { useEffect, useState } from 'react'

const Lifecycle = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Effect Launched");
        return () => {
            console.log("Effect Cleaned Up")
        }
    }, [count]);
    return (
        <div>
            <p>Counter value: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default Lifecycle