import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

import movies from "./data/movies";

export default class App extends Component {
  state = {
    movies: [],
    searchTerm: ""
  }

  updateSearch = (searchTerm) => {
    if(searchTerm.length < 1) this.componentDidMount();
    this.setState({ searchTerm });
  }

  handleChange = (e) => {
    if(e.target.value.length > 2 && e.key === "Enter"){
      this.fetchMovies(this.state.searchTerm);
    } 
  } 

  fetchMovies = (searchTerm) => {
    // if(searchTerm.length > 2)
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=f10a5202`)
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.Search })})
      .catch(error => console.log(error)); 
  }

  componentDidMount = () =>  this.fetchMovies("movie");

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

