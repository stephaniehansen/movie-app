import React, { Component } from 'react';
import styles from "./SearchBar.module.scss"

export default class SearchBar extends Component {
  render() { 
    const { type, placeholder, name, updateSearch, handleChange, style } = this.props;

    return ( 
      <div className={styles.searchBar} style={style}>
        <input type={type} name={name} placeholder={placeholder} onInput={(e) => updateSearch(e.target)} onKeyPress={handleChange} style={style}/>
      </div>
     );
  }
}