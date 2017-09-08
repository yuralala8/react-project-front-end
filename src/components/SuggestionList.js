import React from 'react'
import Suggestion from './Suggestion'


class SuggestionList extends React.Component {


	render(){
		console.log(this.props.suggestions)
		let suggs = this.props.suggestions.map((suggestion, index) => <Suggestion key={index} suggestion={suggestion} />)
		return(
			<div className="suggestion-list">
			<h2> Suggestion List </h2>
			{suggs}
			</div>
			)
	}
}

export default SuggestionList