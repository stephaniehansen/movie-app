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

  updateSearch = (query) => {
    let key = "";
    if(query.value.length < 1 && query.name === "title") this.componentDidMount();
    query.name === "title" ? key = "searchTerm" : key = "searchYear";
    this.setState({ [key] : query.value });
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

