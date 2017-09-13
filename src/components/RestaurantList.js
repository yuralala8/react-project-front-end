import React from 'react';
import Restaurant from './Restaurant'
import { CSSTransitionGroup } from 'react-transition-group'

class RestaurantList extends React.Component {

	render(){
	
		let searchResults = this.props.restaurants.map((restaurant, index) => <Restaurant roomKey={this.props.roomKey} key={index} restaurant = {restaurant} handleClick={this.props.handleClick}/>)
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