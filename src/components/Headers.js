import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const Headers = (props) => {

	return (
		<div className="ui inverted menu">
			<p className="item">Votato</p>		

			<div className="right menu">
				<NavLink 
					className="item"
					to="/signup"
					exact
				>Sign Up</NavLink>
				{props.isLoggedIn ? <NavLink className="item" to="/login" onClick={() => localStorage.removeItem('jwt')} exact>Logout</NavLink> : <NavLink className="item" to="/login" exact>Login</NavLink>}			
				
			</div>

		</div>
	)
}

export default Headers