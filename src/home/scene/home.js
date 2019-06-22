import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

export class Home extends Component {
  onSearchSubmit(term) {}

  render() {
    return (
      <div className="home">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h1>This is home page</h1>
      </div>
    );
  }
}
