import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() { 
    const { placeholder, updateSearch, handleChange } = this.props;

    return ( 
      <>
        <input type="search" placeholder={placeholder} onInput={updateSearch} />
        <button onClick={handleChange}>Search</button>
      </>
     );
  }
}