import React, { useSelector } from 'react';

function CounterOutput() {
    const count = useSelector(state => state.count)
    return (
        <div>
            <h3>{count}</h3>
        </div>
    )
}

export default CounterOutput
