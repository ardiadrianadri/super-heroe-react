import React, { Component } from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

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
      <div className="">
        <form
          onSubmit={this.onFormSubmit.bind(this)}
          className="container form-group has-search search-form"
        >
          <i className="material-icons form-control-feedback">search</i>
          <input
            className="form-control"
            type="text"
            value={this.state.query}
            onChange={this.onInputChange.bind(this)}
            placeholder="Start typing the superhero's name you want to search..."
          />
          <button type="submit" className="btn btn-danger buttom-form">
            Send
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func
};

export default SearchBar;
