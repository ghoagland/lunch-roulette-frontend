import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import Home from './components/Home'

import './App.css'

class App extends Component {
  state = {
    user: {},

  }

  setUser = (user) => this.setState({ user })

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={ (routerProps) => <Home {...routerProps} setUser={this.setUser} /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
