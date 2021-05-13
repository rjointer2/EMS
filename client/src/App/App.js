
import './App.css';

// Components

import SideBar from '../Components/Sidebar/Sidebar';


// React Router 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import EditProfile from '../Screens/EditProfile/EditProfile';
import DashBoard from '../Screens/DashBoard/DashBoard';
import ChatRoom from '../Screens/ChatRoom/ChatRoom';
import Tasks from '../Screens/Tasks/Task';
import LogIn from '../Screens/Login/LogIn';
import LogOut from '../Screens/Logout/LogOut';
import SignUp from '../Screens/SignUp/SignUp';

import { useEffect, useState } from 'react';


const App = () => {

  //for toggling the sidebar
  const [ toggle, setToggle ] = useState(false)

  useEffect(() => {

      // if url path strictly compares to the following set state to true
      setToggle((window.location.pathname === '/') || (window.location.pathname === '/signup') || (window.location.pathname === '/logout'))

      // dependents for rerenders
  }, [toggle])

  return (
    <div className="App">
     <Router>
        {/* BACKDROP */}
        {/* SIDEDRAWER */}
        <div className="menu">
          { !toggle && <SideBar /> }
        </div>
        {/* This main div is to flex the screens injected on the right hand on the application */}
        <main>
          {/* 
              These will serve the component, the / should be resevered for the login
            */}
            <Switch>
              <Route exact path="/home" component={HomeScreen}/>
            </Switch>
            <Switch>
              <Route exact path="/editprofile" component={EditProfile}/>
            </Switch>
            <Switch>
              <Route exact path="/dashboard" component={DashBoard}/>
            </Switch>
            <Switch>
              <Route exact path="/chatrooms" component={ChatRoom}/>
            </Switch>
            <Switch>
              <Route exact path="/tasks" component={Tasks}/>
            </Switch>
            <Switch>
              {/* SAVE LOG IN AS SESSION */}
              <Route exact path="/" component={LogIn}/>
            </Switch>
            <Switch>
              <Route exact path="/logout" component={LogOut}/>
            </Switch>
            <Switch>
              <Route exact path="/signup" component={SignUp}/>
            </Switch>
        </main>
     </Router>

    </div>
  );
}

export default App