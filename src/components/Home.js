import React from 'react'
import RestaurantList from './RestaurantList'
import Search from './Search'
import SuggestionList from './SuggestionList'

const Home = (props) => {

	return (
		<div>
	 <Search getRestaurantData = {props.getRestaurantData}/>
      <RestaurantList handleClick = {props.handleClick} restaurants={props.restaurants}/>
      <SuggestionList suggestions = {props.suggestions} voteChange={props.voteChange} currentUser={props.currentUser} deleteSugg={props.deleteSugg}/>

      </div>
      )

}


export default Home