import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function RestaurantList ({ restaurants }) {
  const restaurantListItems = restaurants.map(restaurant => (
    <RestaurantListItem restaurant={ restaurant } key={ restaurant.id } />
  ))

  return (
    <List>
      { restaurantListItems }
    </List>
  )
}

function RestaurantListItem ({ restaurant }) {
  return (
    <ListItem>
      <ListItemText
        primary={ restaurant.attributes.name }
      />
    </ListItem>
  )
}

export default RestaurantList
