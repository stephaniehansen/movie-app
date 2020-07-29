import React, { Component } from 'react';
import styles from "./SearchBar.module.scss"

export default class SearchBar extends Component {
  render() { 
    const { placeholder, name, updateSearch, handleChange, style } = this.props;

    return ( 
      <div class={styles.searchBar} style={style}>
        <input type="search" name={name} placeholder={placeholder} onInput={(e) => updateSearch(e.target)} onKeyPress={handleChange} style={style}/>
      </div>
     );
  }
}