import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router'
import Home from './components/Home'
import Search from './components/Search'
import Restaurant from './components/Restaurant'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import api from './API'
import './App.css'

class App extends Component {
  state = {
    user: {},
    searchParams: {
      term: 'lunch',
      location: '81 Prospect St., Brooklyn NY'
    },
    restaurant: {},
    restaurantLoading: false
  }

  updateUserOnState = (userData) => {
    this.setState({
      user: {
        ...userData.data,
        restaurants: userData.included
      }
    })
  }

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
    this.search()
  }

  search = () => {
    console.log('MAKE SEARCH FOR:', this.state.searchParams.term)
    this.setState({ restaurantLoading: true })
    api.get('/search', undefined, this.state.searchParams)
      .then(restaurant => this.setState({ restaurant, restaurantLoading: false }))
    this.props.history.push(`/restaurant`)

  }

  loggedIn = () => !!localStorage.getItem('token')

  logOut = () => {
    this.setState({ user: {} })
    localStorage.removeItem("token")
    this.props.history.push('/')
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      api.reauth().then(({ user }) => this.updateUserOnState(user))
    }
  }


  render() {
    return (
      <>
        <Navbar loggedIn={this.loggedIn} logOut={this.logOut}/>
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
            path="/restaurant"
            render={(routerProps) => (
              <Restaurant
                {...routerProps}
                restaurant={this.state.restaurant}
                restaurantLoading={this.state.restaurantLoading}
                search={this.search}
              />
            )}
          />
          { this.loggedIn() &&
            <Route
              path="/profile"
              render={(routerProps) => (
                <Profile
                  { ...routerProps }
                  user={ this.state.user }
                  />
              )}
            />
          }
          <Route
            path="/"
            render={(routerProps) => (
              <Home
                {...routerProps}
                updateUserOnState={this.updateUserOnState}
                loggedIn={this.loggedIn}
              />
            )}
          />

        </Switch>
      </>
    );
  }
}

export default withRouter(App)
