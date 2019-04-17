import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

export class Home extends Component {
  onSearchSubmit(term) {
    console.log(term); // Borrar cuando se implemente la llamada a la API
  }

  render() {
    return (
      <div className="home">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h1>This is home page</h1>
      </div>
    );
  }
}
