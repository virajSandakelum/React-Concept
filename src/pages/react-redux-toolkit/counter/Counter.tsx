// es7 js, that RAFCE use

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react';



const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetNum = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    const addAmount = () => {
        dispatch(incrementByAmount(addValue));
    }

    return (
        <section>
            <p>{count}</p>
            <div className="button">
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <div className="button">
                <input
                    type="text"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button onClick={() => addAmount()}>Add Amount</button>
                <button onClick={() => resetNum()}>Reset</button>
            </div>
        </section>
    )
}

export default Counter