import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: "white"
  }
}


const Navbar = ({ loggedIn, logOut, history }) => {
  const loginButtonOrLogoutAndProfileButtons = loggedIn() ? (
    <>
      <Link style={ styles.link } to="/profile"><Button color="inherit" component="span">Profile</Button></Link>
      <Button color="inherit" onClick={logOut}>Logout</Button>
    </>
  ) : (
    <Button color="inherit" onClick={() => alert('BUILD ME')}>Login</Button>
  )


  return (
    <div style={ styles.root }>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={ styles.grow }>Lunch Roulette</Typography>
          <Link style={ styles.link } to='/search'><Button color="inherit" component="span">Search</Button></Link>
          { loginButtonOrLogoutAndProfileButtons }
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default withRouter(Navbar)
