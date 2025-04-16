import { createStore } from 'redux'
import reducerCounting from './reducer'

const store1 = createStore(reducerCounting)

export default store1