import React from 'react';
import { useSelector } from 'react-redux'

function CounterOutput() {
    const Count = useSelector(state => state.Count)
    console.log(Count)
    return (
        <div>
            <h2>Counter: {Count}</h2>
        </div>
    )
}

export default CounterOutput
