import React, { Component } from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../assets/logo.png"

export default class NavBar extends Component {
  state = {
    displaySearch: false
  }

  toggleSearch = () => this.setState({ displaySearch: !this.state.displaySearch });

  render() {
    const { updateSearch, handleChange } = this.props;

    const searchInputs = this.state.displaySearch ? (
      <>
        <div className={styles.searchTitle}>
          <SearchBar type="search" name="title" placeholder="Search movies by title" updateSearch={updateSearch} handleChange={handleChange} style={{width: "100%", marginRight: "10px"}} />
        </div>
        <div className={styles.searchYear}>
          <SearchBar type="search" name="year" placeholder="Release year" updateSearch={updateSearch} handleChange={handleChange} />
        </div> 
      </>
    ) : null;

    return (
      <nav className={styles.navBar}>
        <div className={styles.logo} onClick={() => window.location.reload()}>
          <span>
            <img src={logo} />
          </span>
          <div className={styles.logoText}> <span>Find</span>Movies</div>
        </div>
        <div className={styles.searchContainer}>
          {searchInputs}
          <span className={styles.searchIcon} onClick={this.toggleSearch}>
            <FontAwesomeIcon icon="search" />
          </span>
        </div>
      </nav>
    );
  }
}