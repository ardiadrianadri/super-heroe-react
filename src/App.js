import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Home from './home';
import Details from './details';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-body">
          <Route exact path="/" render={() => <Redirect to="/home" /> } />
          <Route path="/home" component={Home} />
          <Route path="/details" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
