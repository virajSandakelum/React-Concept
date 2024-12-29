import { useState, useEffect } from 'react';


const UseEffectHook = () => {
    const [count, setCount] = useState<number>(0);
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        setMessage(`The count is now ${count}`);
        console.log("Count updated:", count);
    }, [count]);

    return (
        <div>
            <p>{message}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
    );
};

export default UseEffectHook;
