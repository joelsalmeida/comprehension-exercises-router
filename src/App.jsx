import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      </BrowserRouter>
    );
  }
}

export default App;
