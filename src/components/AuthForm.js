import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const AuthForm = ({ open, toggleAuth, handleChange, logIn }) => {
  return(
    <Dialog
      open={open}
      onClose={toggleAuth}
    >
      <DialogTitle>Log In</DialogTitle>
      <form onSubmit={logIn}>
      <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            name="email"
            label="Email Address"
            type="email"
            onChange={ handleChange }
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={ handleChange }
            fullWidth
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleAuth} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Log In
        </Button>
      </DialogActions>
      </form>
    </Dialog>
  )
}

export default AuthForm
