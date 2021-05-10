
// Global Styles
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components

import SideBar from './Components/Sidebar/Sidebar';
/* import Dashboard from './Components/Dashbpard/Dashboard'; */

// Screens

import HomeScreen from './Screens/HomeScreen/HomeScreen';




function App() {
  return (
    <div className="App">

     <Router>
         {/* TOGGLE HOOK SET HERE FOR MOBILE RESPONSIVENESS */}
      
        <SideBar/>
        {/* BACKDROP */}
        {/* SIDEDRAWER */}

        {/* This main div is to flex the screens injected on the right hand on the application */}
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
          </Switch>
        </main>
     </Router>

    </div>
  );
}

export default App;
