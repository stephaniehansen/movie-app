import React, { Component } from 'react';
import styles from "./SearchBar.module.scss"

export default class SearchBar extends Component {
  render() { 
    const { placeholder, name, updateSearch, handleChange } = this.props;

    return ( 
      <div class={styles.searchBar}>
        <input type="text" name={name} placeholder={placeholder} onInput={updateSearch} onKeyPress={handleChange} />
      </div>
     );
  }
}