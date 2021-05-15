
import './App.css';

// Components

import SideBar from '../Components/Sidebar/Sidebar';


// React Router 

import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

// Screens

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import EditProfile from '../Screens/EditProfile/EditProfile';
import DashBoard from '../Screens/DashBoard/DashBoard';
import ChatRoom from '../Screens/ChatRoom/ChatRoom';
import Tasks from '../Screens/Tasks/Task';
import LogIn from '../Screens/LoginScreens/Login/LogIn';
import SignUp from '../Screens/LoginScreens/SignUp/SignUp';
import ForgotLogin from '../Screens/LoginScreens/ForgotLogin/ForgotLogin';
import ChangeLogin from '../Screens/LoginScreens/ChangeLogin/ChangeLogin';
import Logout from '../Screens/LoginScreens/Logout/logout';



const App = () => {
  

  return (
    <div className="App">
     <Router>
        {/* BACKDROP */}
        {/* SIDEDRAWER */}
        <div className="menu">
          <SideBar /> 
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
              <Route exact path="/" component={LogIn}/>
            </Switch>
            <Switch>
              <Route path="/signup" component={SignUp}/>
            </Switch>
            <Switch>
              <Route path="/forgotlogin" component={ForgotLogin}/>
            </Switch>
            <Switch>
              <Route path="/changelogin" component={ChangeLogin}/>
            </Switch>
            <Switch>
              <Route path='/logout' component={Logout} />
            </Switch>
        </main>
     </Router>

    </div>
  );
}

export default App