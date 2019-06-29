import React, { Component } from 'react';
import './header.css';
import marvelLogo from './img/MarvelLogo.png';
import oswLogo from './img/osw-logo.jpg';

export class Header extends Component {
  handlerClickHome() {
    window.location.href = '/home';
  }

  quienesSomos = () => {
    var elemento = document.getElementById('navbarHeader');
    elemento.classList.toggle('mostrar');
  };

  render() {
    return (
      <header>
        <div className="bg-dark collapse" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">Sobre Guild Ideas</h4>
                <p className="text-muted">
                  Somos una Guild que pertenece a Open Source Weekends, que ayuda a gente iniciada
                  en la programación (y no tan iniciada) a darles conocimientos para que ellos pueda
                  avanzar por si mismos.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <img
                  src={oswLogo}
                  alt="Logo Open Source Weekends"
                  width="125"
                  className="rounded mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark" id="nav-bg-color-marvel">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src={marvelLogo}
                className="d-inline-block align-top"
                height="50"
                width="150"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.quienesSomos.bind(this)}
              height="100"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}
