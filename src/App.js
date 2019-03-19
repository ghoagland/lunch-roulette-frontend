import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import Home from './components/Home'
import Search from './components/Search'
import api from './API'
import './App.css'

class App extends Component {
  state = {
    user: {},
    searchTerm: 'lunch'
  }

  setUser = (user) => this.setState({ user })
  handleSearchChange = (e) => this.setState({ searchTerm: e.target.value })

  handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('MAKE SEARCH FOR:', this.state.searchTerm)
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      api.reauth().then(({ user }) => this.setUser(user.data))
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/search"
            render={(routerProps) => (
              <Search
                {...routerProps}
                searchTerm={this.state.searchTerm}
                handleSearchChange={this.handleSearchChange}
                 handleSearchSubmit={this.handleSearchSubmit}
              />
            )}
          />
          <Route
            path="/"
            render={(routerProps) => <Home {...routerProps} setUser={this.setUser} />}
          />

        </Switch>
      </Router>
    );
  }
}

export default App;
