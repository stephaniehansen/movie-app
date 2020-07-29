import React, { Component } from 'react';
import styles from "./Modal.module.scss"

export default class Modal extends Component {
  render() { 
    const { Title, Plot, Runtime, Genre, Poster } = this.props.currentMovie;

    console.log(this.props.currentMovie);
    return (
      <div className={styles.modal} onClick={this.props.closeModal}>
        <div className={styles.modalContainer}>
          <div className={styles.close} onClick={this.props.closeModal}>close</div>
          <div className={styles.modalContent}>
            <div className={styles.moviePoster}>
              <img src={Poster} alt={Title} />
            </div>
            <div className={styles.movieInfo}>
              <h2>{Title}</h2>
              <div>
                <span>{Runtime}</span> | <span>{Genre}</span>
              </div>
              <p>{Plot}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}