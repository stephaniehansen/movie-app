import React, { Component } from 'react';
import styles from "./Modal.module.scss"

export default class Modal extends Component {
  render() { 
    const { Title } = this.props.currentMovie;

    return (
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <span onClick={this.props.closeModal}>close</span>
          <h1>{Title}</h1>
        </div>
      </div>
    );
  }
}