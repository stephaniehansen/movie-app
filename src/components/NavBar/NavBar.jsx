import React, { Component } from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../assets/logo.png"

export default class NavBar extends Component {
  render() {
    const { updateSearch, handleChange } = this.props;
    return (
      <nav className={styles.navBar}>
        <div className={styles.logo} onClick={() => window.location.reload()}>
          <span>
            <img src={logo} />
          </span>
          <div className={styles.logoText}> <span>Find</span>Movies</div>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchTitle}>
            <SearchBar type="search" name="title" placeholder="Search movies by title" updateSearch={updateSearch} handleChange={handleChange} style={{width: "100%", marginRight: "10px"}} />
          </div>
          <div className={styles.searchYear}>
            <SearchBar type="search" name="year" placeholder="Release year" updateSearch={updateSearch} handleChange={handleChange} />
          </div> 
          <span className={styles.searchIcon} onClick={handleChange}>
            <FontAwesomeIcon icon="search" />
          </span>
        </div>
      </nav>
    );
  }
}