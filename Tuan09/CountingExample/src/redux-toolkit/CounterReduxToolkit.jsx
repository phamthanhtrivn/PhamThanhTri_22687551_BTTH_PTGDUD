import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "./counterSlice"

const CounterReduxToolkit = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button>
        </div>
    )
}

export default CounterReduxToolkit