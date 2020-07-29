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

  fetchMovies = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?s=harry&potter&apikey=f10a5202`)
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.Search })})
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() { 
    const { movies, searchTerm } = this.state;
    return ( 
      <>
        <NavBar updateSearch={this.fetchMovies} />
        <CardList movies={movies} searchTerm={searchTerm} />
      </>
     );
  }
}

