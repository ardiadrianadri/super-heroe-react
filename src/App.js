import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Home from './home';
import Details from './details';
import { Header } from './common/header';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <div className="app-body">
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/details" component={Details} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
