import React from 'react'

class Restaurant extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

	restaurantClick = () => {
		this.props.handleClick(this.props.restaurant)
	}

	render(){

		let restaurantName = this.props.restaurant.restaurant.name

	return(
		<div className='restaurant' onClick={this.restaurantClick}>
		{restaurantName}
		</div>
			)
		}
}

export default Restaurant