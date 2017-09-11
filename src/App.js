import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Auth from './adapters/auth'
import LoginForm from './components/LoginForm'
import { Route, Redirect } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import Headers from './components/Headers'

class App extends Component {
   constructor(){
    super();

    this.state = {
      suggestions: [],
      restaurants: [],
      currentUser: {},
      isLoggedIn: false
    }
   }

     loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, localStorage.setItem('jwt', user.jwt))
        
        console.log(this.state, "logged in")
      })

  }

     signUpUser = (userParams) => {
    Auth.signup(userParams)
      .then(user => {
        console.log(user)
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, localStorage.setItem('jwt', user.jwt))
        console.log(this.state, "signed up, logged in")
      })
  }
    handleClick = (obj) => {
      const jwtToken = localStorage.getItem("jwt")
      const suggJSON = JSON.stringify({res_id: obj.restaurant.id})
    
    console.log(suggJSON)
   
    fetch('http://localhost:3000/api/v1/suggestions',{
          method: 'post',
          body: suggJSON,
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })

    this.setState({
      suggestions: [...this.state.suggestions, obj]
    })
  }

    getRestaurantData = (restaurants) => {
      this.setState({
        restaurants: restaurants.restaurants
      })
    }


  render() {

    return (
      <div className="App">
      <Headers isLoggedIn={localStorage.getItem('jwt')}/>
      <Route path="/login" render={() => <LoginForm onLogin={this.loginUser}/> }/>
       { localStorage.getItem('jwt') ? <Redirect to= "/search"/> : <Redirect to= "/login"/> }
      <Route path="/search" render={() => <Home getRestaurantData={this.getRestaurantData} handleClick={this.handleClick} suggestions={this.state.suggestions} restaurants={this.state.restaurants} /> }/>
      <Route path="/signup" render={() => <SignUpForm onSignUp={this.signUpUser} /> }/>

      </div>
    );
  }
}

export default App;
