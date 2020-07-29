import React, { Component } from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

export default class NavBar extends Component {
  render() {
    const { updateSearch, handleChange } = this.props;
    return (
      <nav className={styles.navBar}>
        <div class={styles.logo}>
          <h2 onClick={() => window.location.reload()}>Movies</h2>
        </div>
        <div className={styles.searchContainer}>
          <SearchBar name="title" placeholder="Search movies by title" updateSearch={updateSearch} handleChange={handleChange} style={{width: "100%", marginRight: "10px"}} />
          <SearchBar name="year" placeholder="Release year" updateSearch={updateSearch} handleChange={handleChange} />
          <span className={styles.searchIcon} onClick={handleChange}>
            <FontAwesomeIcon icon="search" />
          </span>
        </div>
      </nav>
    );
  }
}