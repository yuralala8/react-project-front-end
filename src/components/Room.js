import React from 'react'
import { Link } from 'react-router-dom'

export default class Room extends React.Component {

	constructor() {
		super()

		this.state = {

		}
	}


	render(){

		return (
			<div>

			<Link to={`/search/${this.props.roomKey}`}>
			<div className="room">
			Room {this.props.roomKey}
			</div>
			</Link>
			</div>
			)
	}
}
