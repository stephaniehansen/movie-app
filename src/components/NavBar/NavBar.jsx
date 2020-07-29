import React, { Component } from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";

export default class NavBar extends Component {
  render() { 
    return (
      <nav className={styles.navBar}>
        <p>Navbar</p>
        <SearchBar placeholder="Search movies..." />
      </nav>
    );
  }
}