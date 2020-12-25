import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementAction, decrementAction, resetAction } from './Action';

function CounterInput(props) {
    const dispatch = useDispatch(state => state.state)
    console.log(dispatch)
    return (
        <div>
            <button onClick={() => dispatch(incrementAction())}>+</button>
            <button onClick={() => dispatch(decrementAction())}>-</button>
            <button onClick={() => dispatch(resetAction())}>Reset</button>
        </div>
    )
}

export default CounterInput
