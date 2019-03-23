import React, { Component } from 'react';
import './header.scss';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

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
                  src="./img/osw-logo.jpg"
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1600px-MarvelLogo.svg.png"
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
              onClick={this.quienesSomos}
              height="100"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </header>
      /*
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary text-secundary">
        <span className="title d-flex justify-content-center align-items-center">
          <img src="/images/capitan-sheild.png" className="header-image sheild" />
          <img src="/images/marvel-logo.png" className="header-image logo ml-3 mr-2" />
          <span className="header-text navbar-brand">wiki</span>
          <img src="/images/capitan-sheild.png" className="header-image sheild" />
        </span>
        <span className="actions ml-auto">
          <span className="home material-icons" onClick={this.handlerClickHome.bind(this)}>
            home
          </span>
        </span>
      </nav>*/
    );
  }
}
