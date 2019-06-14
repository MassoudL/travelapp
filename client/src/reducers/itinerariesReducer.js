const initialState = {
    itineraries: []
    }
    
    const itinerariesReducer = (state = initialState, action) => {
        switch(action.type) {
    case 'GET_ITINERARIES': 
    return {
        ...state,
        itineraries : action.payload
    }
    default: return state
        }
    }
    
    export default itinerariesReducer



// The reducer is a pure function that takes the previous state and an action, 
// and returns the next state. (previousState, action) => newState 