import "./App.css"
import CounterReduxToolkit from "./redux-toolkit/CounterReduxToolkit";
import CountingRedux from "./redux/CounterRedux";
import store1 from "./redux/store";
import store from "./redux-toolkit/store";
import CounterReducer from "./useReducer/CounterReducer";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <h1>1. Sử dụng useReducer</h1>
      <CounterReducer />
      <br />
      <Provider store={store1}>
        <h1>2. Sử dụng Redux</h1>
        <CountingRedux />
        <br />
      </Provider>
      <Provider store={store}>
        <h1>3. Sử dụng Redux-Toolkit</h1>
        <CounterReduxToolkit />
        <br />
      </Provider>

    </div>
  )
}

export default App;