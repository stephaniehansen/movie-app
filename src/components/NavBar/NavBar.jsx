import React, { Component } from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";

export default class NavBar extends Component {
  render() {
    const { updateSearch, handleChange } = this.props;
    return (
      <nav className={styles.navBar}>
        <div class={styles.logo}>
          <h2>Movies</h2>
        </div>
        <div className={styles.searchContainer}>
          <SearchBar placeholder="Search movies by title or year" updateSearch={updateSearch} handleChange={handleChange} />
          <button onClick={handleChange}>Search</button>
        </div>
      </nav>
    );
  }
}