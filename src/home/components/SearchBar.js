import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: ''
  };

  // función creada para ejecutar la consulta cuando se haga click en el botón del formulario o se pulse Intro
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  // función creada para transformar el formulario en un componente controlado
  onInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="search-form">
        <input
          type="text"
          value={this.state.query}
          onChange={this.onInputChange}
          placeholder="Start typing ..."
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;
