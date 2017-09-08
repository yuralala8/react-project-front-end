import React from 'react'

class Search extends React.Component {

	constructor() {
		super()

		this.state = {
			searchTerm: ""
		}
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	handleClick = () => {
		fetch(`http://localhost:3000/api/v1/restaurants/${this.state.searchTerm}`)

			.then(resp => resp.json())
			.then(json => this.props.getRestaurantData(json))
	}

	render() {

		return (
			<div>
				<input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
				<button onClick={this.handleClick}>Search Restaurants</button>
			</div>
		)

	}

}


export default Search