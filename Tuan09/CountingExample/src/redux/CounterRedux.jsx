import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from './action'

const CountingRedux = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
        </div>
    )
}

export default CountingRedux