import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
}

const Navbar = ({ loggedIn, logOut }) => {
  return (
    <div style={ styles.root }>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={ styles.grow }>Lunch Roulette</Typography>
          {loggedIn() && <Button color="inherit" onClick={logOut}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default Navbar
