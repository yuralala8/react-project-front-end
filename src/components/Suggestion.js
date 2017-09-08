import React from 'react'

class Suggestion extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			upVotes: 0,
			downVotes: 0
		}
	}

	handleUpVoteClick = () => {
		this.setState ({
			upVotes: this.state.upVotes += 1
		})
	}

	handleDownVoteClick = () => {
		this.setState ({
			downVotes: this.state.downVotes += 1
		})
	}

	render(){
		let suggName = this.props.suggestion.restaurant.name
		let suggAddress = this.props.suggestion.restaurant.location.address
		return (
			<div className="suggestion">
				<h3>{suggName}</h3>
					<div> <p>{this.state.upVotes}</p> <button onClick={this.handleUpVoteClick}>Up</button></div>
					<div> <p>{this.state.downVotes}</p> <button onClick={this.handleDownVoteClick}>Down</button></div>	
			</div>

			)
	}
}


export default Suggestion