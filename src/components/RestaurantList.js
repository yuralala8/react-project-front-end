import React from 'react';
import restaurantData from '../restaurantData'
import Restaurant from './Restaurant'
import { CSSTransitionGroup } from 'react-transition-group'

class RestaurantList extends React.Component {

	// componentDidMount() {
	// 	this.fetchData()
	// }

	// fetchData = () => {
	// 	let options = {

	// 		headers: {
	// 			'user-key': '46d92401d04f692193843afff4ed5aa4'
	// 		},
	// 		dataType: 'json',
	// 		type: 'GET'
	// 	}
	// 	let url = 'https://developers.zomato.com/api/v2.1/search?q=pizza&lat=40.705253&lon=-74.014070'
	// 	fetch(url, options)
	// 	.then(response => response.json())
	// 	.then(json => console.log(json))
	// }




	render(){
		console.log(this.props.restaurants)
		let searchResults = this.props.restaurants.map((restaurant, index) => <Restaurant key={index} restaurant = {restaurant} handleClick={this.props.handleClick}/>)
		return (
			<div className="restaurant-list">
				<CSSTransitionGroup
					transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
				 {searchResults}
			 </CSSTransitionGroup>
			</div>
			)
	}


}

export default RestaurantList