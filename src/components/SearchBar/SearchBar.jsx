import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() { 
    return ( 
      <input type="search" placeholder={this.props.placeholder} />
     );
  }
}