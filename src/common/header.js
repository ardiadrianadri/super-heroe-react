import React, { Component } from 'react';
import './header.scss';

export class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handlerClickHome() {
    window.location.href = '/home';
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary text-secundary">
        <span className="title d-flex justify-content-center align-items-center">
          <img
            src="/images/capitan-sheild.png"
            className="header-image sheild"
            alt="Captain Shield"
          />
          <img
            src="/images/marvel-logo.png"
            className="header-image logo ml-3 mr-2"
            alt="Marvel Logo"
          />
          <span className="header-text navbar-brand">wiki</span>
          <img
            src="/images/capitan-sheild.png"
            className="header-image sheild"
            alt="Captain Shield"
          />
        </span>
        <span className="actions ml-auto">
          <span className="home material-icons" onClick={this.handlerClickHome.bind(this)}>
            home
          </span>
        </span>
      </nav>
    );
  }
}
