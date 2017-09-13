import React from 'react'
import { Link } from 'react-router-dom'

export default class Room extends React.Component {

	constructor() {
		super()

		this.state = {
		
		}
	}


	render(){

		console.log(this.props.roomKey)
		return (
			<div>

			<p><Link to={`/search/${this.props.roomKey}`} activeClassName="current">
			<div className="room">
			Room {this.props.roomKey}
			</div>
			</Link></p>
			</div>
			)
	}
}