// Global Styles
import './App.css';
import { ThemeProvider } from 'styled-components';

// Components

import SideBar from './Components/Sidebar/Sidebar';
/* import Dashboard from './Components/Dashbpard/Dashboard'; */

// Screens

import HomeScreen from './Screens/HomeScreen/HomeScreen';

// React Router 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
          <ThemeProvider>
            <Switch>
              <Route exact path="/" component={HomeScreen}/>
            </Switch>
            <Switch>
              <Route exact path="/" component={HomeScreen}/>
            </Switch>
            <Switch>
              <Route exact path="/" component={HomeScreen}/>
            </Switch>
            <Switch>
              <Route exact path="/" component={HomeScreen}/>
            </Switch>
            <Switch>
              <Route exact path="/" component={HomeScreen}/>
            </Switch>
          </ThemeProvider>
        </main>
     </Router>

    </div>
  );
}


/* 

 PUT IN A NEW FOLDER

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import Dashboard from "./Dashboard";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }
=======
import './App.css';
import SideBar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <SideBar/>
    </div>
  );
}


  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

*/

export default App;

