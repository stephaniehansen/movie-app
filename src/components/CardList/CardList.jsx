import React, { Component } from 'react';
import Card from "../Card";

export default class CardList extends Component {

  getMovies = () => {
    return this.props.movies.map(movie => <Card movie={movie} />)
  }

  render() { 
    return (
      <section>
        <p>CardList</p>
        {this.getMovies()}
      </section>
    );
  }
}