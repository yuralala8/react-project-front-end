import React from 'react'

class Search extends React.Component {

	constructor() {
		super()

		this.state = {
			searchTerm: "",
			address: ""
		}
	}

	handleChange = () => {
		this.setState({
			searchTerm: this.searchTerm.value,
			address: this.address.value,
		})

		console.log(this.state)
	}


	handleClick = () => {
	
		let location = encodeURIComponent(this.state.address).replace(/%20/g,'+').replace(/%2C/, ',')

		console.log(location)
		fetch(`http://localhost:3000/api/v1/restaurants/${this.state.searchTerm}/${location}`)
			.then(resp => resp.json())
			.then(json => console.log(json))
	}


	render() {

		return (
			<div>
				Looking for <input ref={node => this.searchTerm = node} type="text" value={this.state.searchTerm} onChange={this.handleChange} />
				Nearby <input ref={node => this.address = node} type="text" value={this.state.address} onChange={this.handleChange}/>
				<button onClick={this.handleClick}>Search Restaurants</button>
			</div>
		)

	}

}


export default Search