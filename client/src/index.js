import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

import { Provider } from 'react-redux'
// Now the app has access in the store
import store from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
console.log('test')