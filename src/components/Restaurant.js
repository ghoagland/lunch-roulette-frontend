import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


// Sample Data for testing
const restaurant = {"id":"z3TwiFWdJUvY9tW8QMEseQ","alias":"taco-dumbo-brooklyn","name":"Taco Dumbo","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/Q-1j-Y003b0EiJHm9qEKPw/o.jpg","is_closed":false,"url":"https://www.yelp.com/biz/taco-dumbo-brooklyn?adjust_creative=QehP4orgkQ-wTbvDlDNWzQ\u0026utm_campaign=yelp_api_v3\u0026utm_medium=api_v3_business_search\u0026utm_source=QehP4orgkQ-wTbvDlDNWzQ","review_count":133,"categories":[{"alias":"latin","title":"Latin American"},{"alias":"tacos","title":"Tacos"},{"alias":"salad","title":"Salad"}],"rating":4.0,"coordinates":{"latitude":40.700601,"longitude":-73.988467},"transactions":["pickup","delivery"],"price":"$$","location":{"address1":"56 Prospect St","address2":"","address3":null,"city":"Brooklyn","zip_code":"11201","country":"US","state":"NY","display_address":["56 Prospect St","Brooklyn, NY 11201"]},"phone":"+13472020306","display_phone":"(347) 202-0306","distance":90.72050113946592}

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

const Restaurant = ({ restaurant, restaurantLoading, search }) => {
  console.log(restaurant);
  if(!restaurantLoading && !restaurant.id) {
    search()
  }
  if(restaurantLoading || !restaurant.id) {
    return <Paper style={ paperStyles }><CircularProgress /></Paper>
  }

  const categoryChips = restaurant.categories.map(cat => (
    <Chip label={cat.title} key={cat.alias} style={chipStyles} />
  ))

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

        {categoryChips}
        <br />
        <Button style={chipStyles} variant="contained" color="primary">Go here!</Button>
        <Button style={chipStyles} color="primary" onClick={search} >Try again</Button>
      </div>

    </Paper>
  )
}

export default Restaurant
