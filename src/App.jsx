import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";
import Modal from "./components/Modal";

import library from "./data/fa-library";
import movies from "./data/movies";

export default class App extends Component {
  state = {
    movies: [],
    currentMovie: {},
    infoModal: false,
    searchTerm: "",
    searchYear: ""
  }

  updateSearch = (query) => {
    let key = "";
    if(query.value.length < 1 && query.name === "title") this.fetchMovies("movie", "");
    query.name === "title" ? key = "searchTerm" : key = "searchYear";
    this.setState({ [key] : query.value });
  }

  handleChange = (e) => {
    if(e.key === "Enter" || e.type === "click"){
      this.fetchMovies(this.state.searchTerm, this.state.searchYear);
    } 
  } 

  fetchMovies = (searchTerm, searchYear) => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&y=${searchYear}&apikey=f10a5202`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
      .catch(error => console.log(error)); 
  }

  fetchInfo = (id) => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=f10a5202`)
      .then(response => response.json())
      .then(data => this.setState({ currentMovie: data, infoModal: true }))
      .catch(error => console.log(error)); 
  }

  closeModal = (e) => {
    e.stopPropagation();
    this.setState({ infoModal: false })
  }

  componentDidMount = () =>  this.fetchMovies("movie", "");

  render() { 
    const { movies, searchTerm, infoModal, currentMovie } = this.state;
    return ( 
      <>
        <NavBar updateSearch={this.updateSearch} handleChange={this.handleChange} />
        <CardList movies={movies} searchTerm={searchTerm} fetchInfo={this.fetchInfo} />
        {infoModal ? <Modal currentMovie={currentMovie} closeModal={this.closeModal}/> : null}
      </>
     );
  }
}