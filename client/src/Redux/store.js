
// This application is using both redux and react-redux
// Please refer the doc for BOTH library when contributing to the application

import { createStore, combineReducers, applyMiddleWare } from 'redux';

// This simple CRUD will use some async actions so we implement some middlewares
// when accessing the store with AJAX requests

import thunk from 'redux-thunk';

// Our root reducer will hold every child reducer and gather specifed interactions into
// a SINGLE STATE object

const reducer = combineReducers({
    // Use Redux DevTools from Chrome Extenision to view Diff and State
    // Child Reducers Here
});

const middleware = [thunk]