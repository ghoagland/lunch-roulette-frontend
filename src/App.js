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
    searchParams: {
      term: 'lunch',
      location: '81 Prospect St., Brooklyn NY'
    },
    restaurant: {}
  }

  setUser = (user) => this.setState({ user })

  handleSearchParamsChange = (evt) => {
    this.setState({
      searchParams: {
        ...this.state.searchParams,
        [evt.target.name]: evt.target.value
      }
    })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('MAKE SEARCH FOR:', this.state.searchParams.term)
    api.get('/search', undefined, this.state.searchParams)
      .then(restaurant => console.log(restaurant) || this.setState({ restaurant }))
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
                term={this.state.searchParams.term}
                handleSearchChange={this.handleSearchParamsChange}
                handleSearchSubmit={this.handleSearchSubmit}
                location={this.state.searchParams.location}
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
