import React, { Component } from 'react';

import './search-form.scss';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.inputName = null;
  }

  handlerSubmit() {
    console.log('Value: ', this.inputName.value);
  }

  render() {
    return (
      <form
        className="search-form d-flex justify-content-center align-items-center p-2"
        onSubmit={this.handlerSubmit.bind(this)}
      >
        <div className="form-group pr-2">
          <label htmlFor="input-name">Search for your favorite hero</label>
          <input
            type="text"
            id="input-name"
            className="form-control"
            ref={(element) => {
              this.inputName = element;
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-submit mt-3">
          Search
        </button>
      </form>
    );
  }
}
