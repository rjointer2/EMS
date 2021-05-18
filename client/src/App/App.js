
// Screens

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import EditProfile from '../Screens/EditProfile/EditProfile';
import Schedule from '../Screens/Schedule/Schedule'
import ChatRoom from '../Screens/ChatRoom/ChatRoom';
import Shifts from '../Screens/Shifts/Shifts';
import LogIn from '../Screens/LoginScreens/Login/LogIn';
import SignUp from '../Screens/LoginScreens/SignUp/SignUp';
import ForgotLogin from '../Screens/LoginScreens/ForgotLogin/ForgotLogin';
import ChangeLogin from '../Screens/LoginScreens/ChangeLogin/ChangeLogin';


// Global Styles

import './App.css';


// React Router 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App = () => {
  

  return (
    <div className="App">
     <Router>
        <Switch>
            <Route exact path="/home" component={HomeScreen}/>
          </Switch>
          <Switch>
            <Route exact path="/editprofile" component={EditProfile}/>
          </Switch>
          <Switch>
            <Route exact path="/schedule" component={Schedule}/>
          </Switch>
          <Switch>
            <Route exact path="/chatrooms" component={ChatRoom}/>
          </Switch>
          <Switch>
            <Route exact path="/shifts" component={Shifts}/>
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
     </Router>

    </div>
  );
}

export default App