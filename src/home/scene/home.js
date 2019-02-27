import React, { Component } from 'react';

import { SearchForm } from '../components/search-form';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <SearchForm />
      </div>
    );
  }
}
