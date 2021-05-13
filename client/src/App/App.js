
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

import { useEffect, useState } from 'react';


const App = () => {

  // pretty brute force solution for right now

  const [toggle, setToggle] = useState(true)

  const show = () => { if(window.location.pathname === '/') return setToggle(false) }
  
  useEffect(() => { show()}, [toggle])
  console.log(toggle, window.location.pathname )

  return (
    <div className="App">

     <Router>
         {/* TOGGLE HOOK SET HERE FOR MOBILE RESPONSIVENESS */}
         {/* 

          Conditionally set if the user is logged display the sidebar, 
          if not do not display sidebar 

          useState and take the destructed value from the fetch rep and 
    
        */}

        {/* BACKDROP */}
        {/* SIDEDRAWER */}
        <div className="menu">
          { toggle && <SideBar/> }
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
              <Route exact path="/Logout" component={LogOut}/>
            </Switch>
        </main>
     </Router>

    </div>
  );
}

export default App