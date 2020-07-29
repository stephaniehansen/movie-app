import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

import movies from "./data/movies";

export default class App extends Component {
  state = {
    movies: [],
    searchTerm: "movie"
  }

  updateSearch = e => this.setState({ searchTerm: e.target.value });

  handleChange = e => e.key === "Enter" ? this.fetchMovies(this.state.searchTerm) : null;

  fetchMovies = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=f10a5202`)
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.Search })})
      .catch(error => console.log(error));
  }

  componentDidMount() { this.fetchMovies(this.state.searchTerm); }

  render() { 
    const { movies, searchTerm } = this.state;
    return ( 
      <>
        <NavBar updateSearch={this.updateSearch} handleChange={this.handleChange} />
        <CardList movies={movies} searchTerm={searchTerm} />
      </>
     );
  }
}

