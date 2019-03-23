import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Search = ({ term, handleSearchChange, handleSearchSubmit, location }) => {
  return(
    <form onSubmit={handleSearchSubmit}>
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

      <Button type="submit" variant="contained" color="primary">Feed me</Button>
    </form>
  )
}

export default Search
