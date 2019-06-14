import { combineReducers } from 'redux';

import citiesReducer from './citiesReducer';

import itinerariesReducer from './itinerariesReducer';


export default combineReducers({
    citiesObj: citiesReducer,
    itinerariesObj: itinerariesReducer,
});





// The reducer is a pure function that takes the previous state and an action, 
// and returns the next state. (previousState, action) => newState 