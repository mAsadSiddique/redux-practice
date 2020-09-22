const initialState = {
    Count = 0,
};

export default function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, Count: state.Count + 1 };

        case "DECREMENT":
            return { ...state, Count: state.Count - 1 };

        default:
            return state;
    }

}