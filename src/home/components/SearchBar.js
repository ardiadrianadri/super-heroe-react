import React, { Component } from 'react';
import MaterialIcon, { colorPalette } from 'material-design-icons';
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
      <div className="container">
        <form onSubmit={this.onFormSubmit} className="form-group has-search">
          <MaterialIcon icon="dashboard" />
          <span className="fa fa-search form-control-feedback" />
          <input
            className="form-control"
            type="text"
            value={this.state.query}
            onChange={this.onInputChange}
            placeholder="Start typing ..."
          />
          <span className="input-group-btn">
            <button className="btn btn-info">Search</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
