import React, { Component } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList'
import Search from './components/Search'
import SuggestionList from './components/SuggestionList'

class App extends Component {
   constructor(){
    super();

    this.state = {
      suggestions: [],
      restaurants: []
    }
   }


    handleClick = (obj) => {
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
      <Search getRestaurantData = {this.getRestaurantData}/>
      <RestaurantList handleClick = {this.handleClick} restaurants={this.state.restaurants}/>
      <SuggestionList suggestions = {this.state.suggestions} />
      </div>
    );
  }
}

export default App;
