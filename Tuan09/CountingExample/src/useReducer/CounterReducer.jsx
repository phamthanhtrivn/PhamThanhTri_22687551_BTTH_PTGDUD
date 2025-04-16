import { useReducer } from "react";

const init = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { count: state.count + 1}
        case 'DECREASE':
            return { count: state.count - 1}
        default:
            break;
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, init)

    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={() => dispatch({type: 'INCREASE'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREASE'})}>-</button>
        </div>
    )
}

export default CounterReducer