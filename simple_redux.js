const redux = require("redux")

// store
const createStore = redux.createStore

// actions
const BUY_CAKE = "BUY_CAKE"

function buyCake(){
    return{
        type: BUY_CAKE,
        info: "First redux action"
    }
}

// initial state

const initial_state = {
    totalCakes: 10
}

// reducer



const reducer = (state=initial_state, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,   
            totalCakes: state.totalCakes - 1
        }

        default: return state
    }
}

// store
const store = createStore(reducer) // store is created, thus, the store is now holding state object
console.log("Initial state - ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state : ", store.getState()))
store.dispatch(buyCake())
unsubscribe()