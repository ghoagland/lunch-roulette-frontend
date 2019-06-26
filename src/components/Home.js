import React, { Component } from 'react'
import { Button, Typography } from '@material-ui/core'
import api from '../API'
import AuthForm from './AuthForm'

const styles = {
  header: {
    padding: "1rem",
  },
  button: {
    margin: "1rem"
  }
}

class Home extends Component {
  state = {
    authVisible: false,
    user: {
      name: "",
      email: "",
      default_location: "",
      password: ""
    },
    message: ""
  }

  logIn = (e) => {
    e.preventDefault()
    const { user } = this.state
    api.login(user)
      .then(({user, jwt, message}) => {
        if(!message) {
          this.props.updateUserOnState(user)
          localStorage.setItem('token', jwt)
          this.props.history.push('/search')
        } else {
          this.setState({ message })
        }
      })
  }

  toggleAuth = () => this.setState({ authVisible: !this.state.authVisible })

  handleChange = (e) => {
    const newUser = { ...this.state.user, [e.target.name]: e.target.value }
    this.setState({ user: newUser })
  }

  handleClick = () => {
    if (this.props.loggedIn()) {
      this.props.history.push('/search')
    } else {
      this.toggleAuth()
    }
  }


  render() {
    const buttonText = this.props.loggedIn() ? "Find some food" : "Let's get started!"
    return (
      <div>
        <Typography component="h1" variant="h3" style={ styles.header }>
          Welcome To Lunch Roulette!
        </Typography>
        <Button
          variant="contained"
          onClick={ this.handleClick }
          style={ styles.button }
        >
          { buttonText }
        </Button>
        <AuthForm
          message={this.state.message}
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
