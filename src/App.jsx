import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

import movies from "./data/movies";

export default class App extends Component {
  state = {
    movies: [],
    searchTerm: "",
    searchYear: ""
  }

  updateSearch = (e) => {
    if(e.target.value.length < 1) this.componentDidMount();

    if(e.target.name === "title") {
      this.setState({ searchTerm : e.target.value });
    } else {
      this.setState({ searchYear: e.target.value });
    }

  }

  handleChange = (e) => {
    if(e.key === "Enter" || e.type == "click"){
      this.fetchMovies(this.state.searchTerm, this.state.searchYear);
    } 
  } 

  fetchMovies = (searchTerm, searchYear) => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&y=${searchYear}&apikey=f10a5202`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
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

