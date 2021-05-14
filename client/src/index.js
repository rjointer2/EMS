import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

import { Provider } from 'react-redux';
import store from "./Redux/store";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log('test')