import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    authVisible: false
  }

  showAuth = () => this.setState({ authVisible: !this.state.authVisible })


  render() {
    return(
      <div>
        <h1>Welcome To Lunch Roulette!</h1>
        <Button variant="contained" onClick={this.showAuth}>
          Let's get started!
        </Button>
      </div>
    )
  }
}

export default Home
