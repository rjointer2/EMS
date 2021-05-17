
// Modules

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import { GlobalStyles } from '../styles/global'
import { ThemeContext } from '../Context/ThemeContext'


// Screens

import  AdminDashBoard from '../Screens/AdminDashboard/AdminDashBoard'

// Global Styles

import './App.css';
import { useContext } from 'react'


// React Router 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





const App = () => {
  
  // Light and Dark Mode
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <div className="App">


    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/admindashboard" component={AdminDashBoard} />
        </Switch>
      </Router>
    </ThemeProvider>

    </div>
  );
}

export default App