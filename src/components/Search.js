import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Search = ({ searchTerm, handleSearchChange, handleSearchSubmit }) => {
  return(
    <form onSubmit={handleSearchSubmit}>
      <TextField
        id="standard-search"
        label="Whatcha wanna eat?"
        type="search"
        margin="normal"
        onChange={handleSearchChange}
        defaultValue={searchTerm}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">Feed me</Button>
    </form>
  )
}

export default Search
