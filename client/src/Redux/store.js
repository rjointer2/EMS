
// This application is using both redux and react-redux
// Please refer the doc for BOTH library when contributing to the application

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// This simple CRUD will use some async actions so we implement some middlewares
// when accessing the store with AJAX requests

// reducers 

import { scheduleRudecer } from './reducers/scheduleReducer'
import { scheduleCartReducer } from './reducers/scheduleCartReducers';
import { loginRequestReducer } from './reducers/loginReducer';
  
// Our root reducer will hold every child reducer and gather specifed interactions into
// a SINGLE STATE object

const reducer = combineReducers({
    // Use Redux DevTools from Chrome Extenision to view Diff and State
    // Child Reducers Here

    // shift state is accessible as a global state so use getState to get access
    shift: scheduleCartReducer,
    // To log 
    getUserLogin: loginRequestReducer,
    // auth user to see schedule
    getScheduleRequest: scheduleRudecer,
    // admin request

});

const middleware = [thunk]

// Store's State

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store