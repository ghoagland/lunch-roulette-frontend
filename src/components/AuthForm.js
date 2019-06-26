import React from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const AuthForm = ({ open, toggleAuth, handleChange, logIn, message }) => {
  return(
    <Dialog
      open={open}
      onClose={toggleAuth}
    >
    <DialogContent>
      <Typography component="h2" variant="h5" >Log In</Typography>
      { message && (
        <Typography component="p" style={{ color: "red" }}>{message}</Typography>
      )}
      <form onSubmit={logIn}>
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
        <DialogActions>
          <Button onClick={toggleAuth} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Log In
          </Button>
        </DialogActions>
      </form>
    </DialogContent>
    </Dialog>
  )
}

export default AuthForm
