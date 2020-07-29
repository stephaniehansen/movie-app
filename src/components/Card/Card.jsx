import React, { Component } from 'react';

export default class Card extends Component {
  render() { 
    const {Title, Year, Poster} = this.props.movie;
    return (
        <div>
          <img src={Poster} alt={Title} />
          <h3>{Title}</h3>
          <p>{Year}</p>
        </div>
    );
  }
}