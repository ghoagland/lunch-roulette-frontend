import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import api from '../API'

//TODO: Move to another file!!!!!!!
const paperStyles = {
  // height: "100vh",
  maxWidth: "1000px",
  margin: "0 auto",
  minHeight: "inherit"
}

const imageStyles = {
   position: 'relative',
   width: '100%', /* for IE 6 */
   opacity: 0.25,
   borderRadius: "5px"
}

const chipStyles = {
  margin: "3px"
}
const textPadding = {
  position: "absolute",
  top: "1em",
  padding: "1em"
}

class Restaurant extends Component {

  componentDidMount() {
    if(this.needToFetchRestaurant) {
      this.props.search()
    }
  }

  render() {
    const { restaurant, search } = this.props

    if(this.restaurantNotLoaded) {
      return <Paper style={ paperStyles }><CircularProgress /></Paper>
    }

    return(
      <Paper style={ paperStyles }>
        <img src={restaurant.image_url} alt="restaurant" style={imageStyles}/>
        <div style={textPadding}>
          <Typography component="h1" variant="h4" >
            {restaurant.name}
          </Typography>
          <Typography component="p" >
            Address: {restaurant.location.display_address.join(', ')}
          </Typography>
          <Typography component="p" >
            Distance: { Math.round(restaurant.distance) }m
          </Typography>

          {this.categoryChips()}
          <br />
          <Button
            style={chipStyles}
            variant="contained"
            color="primary"
            onClick={ () => api.post('/user_restaurants', { restaurant }).then(console.log)}
          >
            Go here!
          </Button>
          <Button style={chipStyles} color="primary" onClick={search} >Try again</Button>
        </div>

      </Paper>
    )
  }

  categoryChips() {
    return this.props.restaurant.categories.map(cat => (
      <Chip label={cat.title} key={cat.alias} style={chipStyles} />
    ))
  }

  get needToFetchRestaurant() {
    return !this.props.restaurantLoading && !this.props.restaurant.id
  }

  get restaurantNotLoaded() {
    return this.props.restaurantLoading || !this.props.restaurant.id
  }
}

export default Restaurant
