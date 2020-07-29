import React, { Component } from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";

export default class NavBar extends Component {
  render() {
    const { updateSearch } = this.props;
    return (
      <nav className={styles.navBar}>
        <p>Movies</p>
        <SearchBar placeholder="Search movies..." updateSearch={updateSearch} />
      </nav>
    );
  }
}