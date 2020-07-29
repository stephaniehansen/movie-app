import React, { Component } from 'react';
import styles from "./Card.module.scss";

export default class Card extends Component {
  render() { 
    const {Title, Year, Poster} = this.props.movie;
    return (
        <div className={styles.card}>
          <img src={Poster} alt={Title} />
          <h3>{Title}</h3>
          <p>{Year}</p>
        </div>
    );
  }
}