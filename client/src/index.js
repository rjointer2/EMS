
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { ThemeContextProvider } from './Context/ThemeContext'


ReactDOM.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>,
  document.getElementById('root')
)
