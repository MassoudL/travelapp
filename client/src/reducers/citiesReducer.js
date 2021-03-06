const initialState = {
//     cities:[
//         {
//         cityName: "Berlin",
//         country: "Germany"
//     },
//         {
//         cityName: "Paris",
//         country: "France"
//     },


// ],
//     loading:true
}

const citiesReducer = (state = initialState, action) => {
    switch(action.type) {
case 'GET_CITIES': 
return {
    ...state,
    cities : action.payload
}
default: return state
    }
}

export default citiesReducer



// The reducer is a pure function that takes the previous state and an action, 
// and returns the next state. (previousState, action) => newState 