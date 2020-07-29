import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() { 
    const { placeholder, updateSearch } = this.props;
    return ( 
      <input type="search" placeholder={placeholder} onInput={(e) => updateSearch(e.target.value)} />
     );
  }
}