import React, { Component } from 'react';
import styles from "./CardList.module.scss"
import Card from "../Card";

export default class CardList extends Component {
  getMovies = () => {
    const { movies, fetchInfo } = this.props;
    return movies.map(movie => <Card key={movie.imdbID} movie={movie} fetchInfo={fetchInfo} />)
  }

  getErrorMsg = () => {
    const { searchTerm } = this.props;
    return searchTerm.length < 1 ? 
    "Please enter a title to search..." : "No results to display...";
  }

  render() { 
    return (
      <section className={styles.cardList}>
        {this.props.movies ? this.getMovies() : this.getErrorMsg()}
      </section>
    );
  }
}