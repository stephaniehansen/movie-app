import React, { Component } from 'react';
import styles from "./Modal.module.scss"

export default class Modal extends Component {
  render() { 
    return (
      <div className={styles.modal}>
        <p>Modal works!</p>
      </div>
    );
  }
}