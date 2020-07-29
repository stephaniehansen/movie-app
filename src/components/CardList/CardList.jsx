import React, { Component } from 'react';
import styles from "./CardList.module.scss"
import Card from "../Card";

export default class CardList extends Component {
  getMovies = () => {
    const { movies, searchTerm } = this.props;
    
    return movies.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(movie => <Card key={movie.imdbID} movie={movie} searchTerm={searchTerm} />)
  }

  render() { 
    return (
      <section className={styles.cardList}>
        {this.getMovies()}
      </section>
    );
  }
}