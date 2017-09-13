import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const Headers = (props) => {

	return (
		<div className="ui menu header">
			<p className="item logo">votato</p>

			<div className="right menu">
				{props.isLoggedIn ? <NavLink className="item" to="/room" exact>My Rooms</NavLink> : null}

				<NavLink
					className="item"
					to="/signup"
					exact
				>Sign Up</NavLink>
				{props.isLoggedIn ? <NavLink className="item" to="/login" onClick={() => localStorage.clear()} exact>Logout</NavLink> : <NavLink className="item" to="/login" exact>Login</NavLink>}



			</div>

		</div>
	)
}

export default Headers
