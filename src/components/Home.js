import React from 'react'
import RestaurantList from './RestaurantList'
import Search from './Search'
import SuggestionList from './SuggestionList'

const Home = (props) => {
	return (
			<div className="search-top">
				<Search getRestaurantData = {props.getRestaurantData}/>
		       <RestaurantList roomKey={props.roomKey} handleClick = {props.handleClick} restaurants={props.restaurants}/>
		       <SuggestionList roomKey={props.roomKey} suggestions = {props.suggestions} voteChange={props.voteChange} currentUser={props.currentUser} deleteSugg={props.deleteSugg}/>
      </div>
      )

}


export default Home
