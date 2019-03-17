import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import api from '../API'
import AuthForm from './AuthForm'

class Home extends Component {
  state = {
    authVisible: false,
    user: {
      name: "",
      email: "",
      default_location: "",
      password: ""
    }

  }

  logIn = (e) => {
    e.preventDefault()
    const { user } = this.state
    console.log(api)
    api.login({ user }).then(console.log)
  }

  toggleAuth = () => this.setState({ authVisible: !this.state.authVisible })

  handleChange = (e) => {
    const newUser = { ...this.state.user, [e.target.name]: e.target.value }
    this.setState({ user: newUser })
  }


  render() {
    return(
      <div>
        <h1>Welcome To Lunch Roulette!</h1>
        <Button variant="contained" onClick={this.toggleAuth}>
          Let's get started!
        </Button>
        <AuthForm
          open={this.state.authVisible}
          toggleAuth={this.toggleAuth}
          handleChange={this.handleChange}
          logIn={this.logIn}
        />
      </div>
    )
  }
}

export default Home
