import React, { Component } from 'react';
import styles from "./Card.module.scss";
import defaultPoster from "../../assets/movie-poster-default.png"

export default class Card extends Component {
  render() { 
    const { Title, Poster, Year, imdbID } = this.props.movie;
    const { fetchInfo } = this.props;

    return (
        <div className={styles.card} onClick={() => fetchInfo(imdbID)}>
          <img src={Poster !== "N/A" ? Poster : defaultPoster} alt={Title} />
          <h3>{Title}</h3>
          <p className={styles.releaseYear}>{Year}</p>
        </div>
    );
  }
}