import React from 'react'
import Suggestion from './Suggestion'
import { CSSTransitionGroup } from 'react-transition-group'


class SuggestionList extends React.Component {

	filterSuggestions = () => {
		return this.props.suggestions.filter(suggestion => suggestion.room_id == this.props.roomKey)
	}

	render(){
		let suggs = this.filterSuggestions().map((suggestion, index) => <Suggestion key={index} suggestion={suggestion} deleteSugg={this.props.deleteSugg} currentUser={this.props.currentUser} voteChange={this.props.voteChange}/>)
		return(
			<div className="suggestion-list">
			<h2> Suggestion List </h2>
			<CSSTransitionGroup
					transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
				 {suggs}
			 </CSSTransitionGroup>
			</div>
			)
	}
}

export default SuggestionList