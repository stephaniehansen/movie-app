import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

import movies from "./data/movies";

export default class App extends Component {
  state = {
    movies: movies,
    searchTerm: ""
  }

  updateSearch = searchTerm => this.setState({ searchTerm });

  render() { 
    return ( 
      <>
        <NavBar updateSearch={this.updateSearch} />
        <CardList movies={this.state.movies} searchTerm={this.state.searchTerm} />
      </>
     );
  }
}