
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


const App = () => {
  
  return (
    <div className="App">

     <Router>
         {/* TOGGLE HOOK SET HERE FOR MOBILE RESPONSIVENESS */}
      
        <SideBar/>
        {/* BACKDROP */}
        {/* SIDEDRAWER */}

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