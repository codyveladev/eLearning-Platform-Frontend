import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from "./components/pages/Login";
import MainPage from './components/pages/MainPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/login' component={Login}/>
            <Route path='/main-page' component={MainPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}



export default App;
