import React from 'react'

class Suggestion extends React.Component {
	constructor(props){
		super(props)
	
	}


	handleVoteClick = (event) => {
		const voteValue = event.target.dataset.vote
		this.props.voteChange(this.props.suggestion, voteValue)
	}

	
	handleDelete = () => {
		this.props.deleteSugg(this.props.suggestion)
	}

	render(){
		console.log("test", localStorage.getItem("id"), this.props.suggestion['user_id'])

		let suggName = this.props.suggestion["res_name"]
		let suggAddress = this.props.suggestion["res_location"]
		let suggCuisine = this.props.suggestion["res_cuisines"]
		let suggMenuUrl = this.props.suggestion["res_menu_url"]
		let suggImage = this.props.suggestion["res_image"]
		let suggUrl = this.props.suggestion["res_url"]
		let suggRating = this.props.suggestion["res_user_rating"]
		let imgStyle = suggImage ? {backgroundImage: 'url(' + suggImage + ')'} : {backgroundImage: 'url(https://www.tastefullysimple.com/_/media/images/recipe-default-image.png)'}
		// let rating = this.state.restaurant.user_rating.aggregate_rating
		return (
			<div className="suggestion">
				{localStorage.getItem("id") == this.props.suggestion['user_id'] ? <p className="delete" onClick={this.handleDelete}>X</p> : null}

				<span className="rating">{suggRating}</span>

				<div className="sugg-image" style={imgStyle}> </div>

				<div className="sugg-info"> 
					<h4>{suggCuisine}</h4>
					<h2><a href={suggUrl} target="blank_"> {suggName}</a></h2>
					<p>{suggAddress}</p>
					<div> 
						<a href={suggUrl} target="blank_">More Details</a>
						<a href={suggMenuUrl} target="blank_">View Menu</a>
					</div>
					<div className="sugg-info-bottom">
						<p>Suggested by: {this.props.suggestion.username}</p>
						<div className="vote vote-up">
							{this.props.suggestion["vote_up"]}
							<button data-vote="up" onClick={this.handleVoteClick}>Up</button>
						</div>
						<div className="vote vote-up">{this.props.suggestion["vote_down"]}
							<button data-vote="down" onClick={this.handleVoteClick}>Down</button>
						</div>	
					</div>
				</div>

			</div>

			)
		}
}


export default Suggestion