import React from 'react'
import { TextField, Button,Typography } from '@material-ui/core'

const styles = {
  form: {
    padding: "1rem",
  },
  button: {
    marginTop: "1rem"
  }
}

const Search = ({ term, handleSearchChange, handleSearchSubmit, location }) => {
  return(
    <form onSubmit={handleSearchSubmit} style={ styles.form }>
      <Typography component="h1" variant="h5">
        Make some choices or use ours
      </Typography>
      <TextField
        id="standard-search"
        label="Whatcha wanna eat?"
        type="search"
        margin="normal"
        name="term"
        onChange={handleSearchChange}
        defaultValue={term}
      />
      <br />
      
      <TextField
        id="standard-search"
        label="Where are you even?"
        type="search"
        margin="normal"
        name="location"
        onChange={handleSearchChange}
        defaultValue={location}
      />
      <br />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={ styles.button }
      >
        Feed me
      </Button>
    </form>
  )
}

export default Search
