import { decrement, increment, reset } from './Action';

const initialState = {
    Count: 0,
};

export default function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case increment:
            return { ...state, Count: state.Count + 1 };

        case decrement:
            return { ...state, Count: state.Count - 1 };

        case reset:
            return { ...initialState }

        default:
            return state;
    }

}