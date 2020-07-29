import React, { Component } from 'react';
import styles from "./CardList.module.scss"
import Card from "../Card";

export default class CardList extends Component {
  getMovies = () => {
    const { movies } = this.props;
    return movies.map(movie => <Card movie={movie} />)
  }

  render() { 
    return (
      <section className={styles.cardList}>
        {this.getMovies()}
      </section>
    );
  }
}