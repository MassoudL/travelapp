import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


const middleware = [thunk]; // the only middleware is thunk. 

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;