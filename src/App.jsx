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
    const { movies, searchTerm } = this.state;
    return ( 
      <>
        <NavBar updateSearch={this.updateSearch} />
        <CardList movies={movies} searchTerm={searchTerm} />
      </>
     );
  }
}