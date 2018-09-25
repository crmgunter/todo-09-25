import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import LogIn from './components/LogIn'
import IdeaPage from './components/IdeaPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LogIn} />
            <Route path="/user/:userId" component={IdeaPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
