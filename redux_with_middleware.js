const redux = require("redux")
const reduxLogger = require("redux-logger")

// store
const createStore     = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

// logger
const logger = reduxLogger.createLogger()

// actions
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "Second redux action"
    }
}


// initial state
const initial_state = {
    totalCakes: 10,
    totalIcecreams: 20,
}

const initial_cake_state = {
    totalCakes: 10,
}

const initial_icecream_state = {
    totalIcecreams: 20,
}

// reducer
const cakeReducer = (state = initial_cake_state, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            totalCakes: state.totalCakes - 1
        }

        default: return state
    }
}
const icecreamReducer = (state = initial_icecream_state, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            totalIcecreams: state.totalIcecreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

// store
const store = createStore(rootReducer, applyMiddleware(logger)) // store is created, thus, the store is now holding state object
console.log("Initial state - ", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()