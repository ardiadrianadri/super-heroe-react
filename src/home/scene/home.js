import React, { Component } from 'react';

import { SearchHero } from '../containers/search-hero';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <SearchHero />
      </div>
    );
  }
}
