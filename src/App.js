import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Auth from './adapters/auth'
import LoginForm from './components/LoginForm'
import { Route, Redirect } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import Headers from './components/Headers'
import SuggestionList from './components/SuggestionList'
import RoomPage from './components/RoomPage'

class App extends Component {
   constructor(){
    super();

    this.state = {
      suggestions: [],
      restaurants: [],
      currentUser: {user:{id:null}},
      isLoggedIn: false

    }
   }

 startInterval = () => {
    this.interval = setInterval(this.fetchVotes, 2000);
  }
  
      componentDidMount = () => {
        const jwtToken = localStorage.getItem("jwt")
         fetch('http://localhost:3000/api/v1/suggestions',{
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
         .then(resp => resp.json())
         .then(json => this.setState({ suggestions: json }))

       this.startInterval()
      }


  cleanUpInterval = () => clearInterval(this.interval);

  componentWillUnmount(){
    this.cleanUpInterval()
  }

       

     loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, this.setLocalstorage(user))
        
      })

  }

  setLocalstorage = (user)=>{
    localStorage.setItem('jwt', user.jwt)
    localStorage.setItem('id', user.user.id)
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
    handleClick = (obj, roomKey) => {
      const jwtToken = localStorage.getItem("jwt")
      const suggJSON = JSON.stringify({
        res_id: obj.restaurant.id,
        res_name: obj.restaurant.name,
        res_cuisines: obj.restaurant.cuisines,
        res_location: obj.restaurant.location["address"],
        res_menu_url: obj.restaurant["menu_url"],
        res_image: obj.restaurant["featured_image"],
        res_url: obj.restaurant.url,
        res_user_rating: obj.restaurant["user_rating"]["aggregate_rating"],
        room_id: roomKey
      })
    
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
    .then(res => res.json())
    .then(json => this.setState({ suggestions: json }))

  //   this.setState({
  //     suggestions: [...this.state.suggestions, obj]
  //   })
  }

    getRestaurantData = (restaurants) => {
      console.log(restaurants)
      this.setState({
        restaurants: restaurants.restaurants
      })

    }


  voteChange = (suggestion, voteValue) => {
  const jwtToken = localStorage.getItem("jwt")

         fetch(`http://localhost:3000/api/v1/suggestions/${suggestion.id}`,{
         method: 'post',
         body: JSON.stringify({"vote":voteValue}),
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
         .then(resp => resp.json())
         // .then(json => console.log(json))
         .then(json => this.setState({ suggestions: json }))
       }


  fetchVotes = () => {
    
        const jwtToken = localStorage.getItem("jwt")
         fetch('http://localhost:3000/api/v1/suggestions',{
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
         .then(resp => resp.json())
         .then(json => this.setState({ suggestions: json }))
   }


  componentWillMount(){
    this.fetchVotes()
  }


  deleteSugg = (suggestion) => {
    const jwtToken = localStorage.getItem("jwt")

       fetch(`http://localhost:3000/api/v1/suggestions/${suggestion.id}`,{
       method: 'delete',
        headers: {
          "Authorization": `Bearer ${jwtToken}`,
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      })
       .then(resp => resp.json())
       // .then(json => console.log(json))
       .then(json => this.setState({ suggestions: json }))
  }


  render() {


    return (
      <div className="App">
      <Headers isLoggedIn={localStorage.getItem('jwt')}/>
      <Route path="/login" render={() => <LoginForm onLogin={this.loginUser}/> }/>
       { localStorage.getItem('jwt') ? <Redirect to= "/room"/> : <Redirect to= "/login"/> }
      <Route path="/search/:id" render={(data) => <Home roomKey={data.match.params.id} getRestaurantData={this.getRestaurantData} handleClick={this.handleClick} currentUser={this.state.currentUser} suggestions={this.state.suggestions} restaurants={this.state.restaurants}  voteChange={this.voteChange} deleteSugg={this.deleteSugg}/> }/>
      <Route path="/signup" render={() => <SignUpForm onSignUp={this.signUpUser} /> }/>
      <Route path="/room" render={() => <RoomPage suggestions={this.state.suggestions} /> } />

      </div>
    );
  }
}

export default App;
