import React, { Component } from 'react';
import styles from "./CardList.module.scss"
import Card from "../Card";

export default class CardList extends Component {

  getMovies = () => {
    return this.props.movies.map(movie => <Card movie={movie} />)
  }

  render() { 
    return (
      <section className={styles.cardList}>
        {this.getMovies()}
      </section>
    );
  }
}