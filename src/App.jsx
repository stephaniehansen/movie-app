import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

import movies from "./data/movies";

export default class App extends Component {
  state = {
    movies: movies
  }
  render() { 
    return ( 
      <>
        <NavBar />
        <CardList movies={this.state.movies}/>
      </>
     );
  }
}