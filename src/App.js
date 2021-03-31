import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from "./components/pages/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/recipes' component={Recipes} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/login' component={Login}/>
          </Switch>
        </Router>
      </div>
    )
  }
}



export default App;
