import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Home />
      <Route exact path="/" component={Home}/>
      </BrowserRouter>
    );
  }
}

export default App;
