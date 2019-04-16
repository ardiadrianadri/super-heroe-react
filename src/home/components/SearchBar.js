import React, { Component } from 'react';
import './SearchBar.css';

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
      <div>
        <form onSubmit={this.onFormSubmit} className="form-group has-search search-form">
          <i className="material-icons form-control-feedback">search</i>
          <input
            className="form-control"
            type="text"
            value={this.state.query}
            onChange={this.onInputChange}
            placeholder="Start typing the superhero's name you want to search..."
          />
          <button type="submit" className="btn btn-danger">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
