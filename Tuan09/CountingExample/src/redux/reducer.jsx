const init = { count: 0 }

const reducerCounting = (state = init, action) => {
    switch (action.type) {
        case "INCREASE":
            return { count: state.count + 1 }
        case "DECREASE":
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export default reducerCounting