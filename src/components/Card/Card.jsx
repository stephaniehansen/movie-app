import React, { Component } from 'react';
import styles from "./Card.module.scss";
import defaultPoster from "../../assets/movie-poster-default.png"

export default class Card extends Component {

  render() { 
    const {Title, Poster, Year } = this.props.movie;
    return (
        <div className={styles.card}>
          <img src={Poster !== "N/A" ? Poster : defaultPoster} alt={Title} />
          <h3>{Title}</h3>
          <p>{Year}</p>
        </div>
    );
  }
}