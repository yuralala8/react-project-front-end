import React from 'react'
import Suggestion from './Suggestion'
import { CSSTransitionGroup } from 'react-transition-group'


class SuggestionList extends React.Component {


	render(){
		let suggs = this.props.suggestions.map((suggestion, index) => <Suggestion key={index} suggestion={suggestion} />)
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