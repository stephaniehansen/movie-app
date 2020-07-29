import React, { Component } from 'react';
import styles from "./SearchBar.module.scss"

export default class SearchBar extends Component {
  render() { 
    const { placeholder, updateSearch, handleChange } = this.props;

    return ( 
      <div class={styles.searchBar}>
        <input type="text" placeholder={placeholder} onInput={(e) => updateSearch(e.target.value)} onKeyPress={handleChange} />
        {/* <button onClick={handleChange}>Search</button> */}
      </div>
     );
  }
}