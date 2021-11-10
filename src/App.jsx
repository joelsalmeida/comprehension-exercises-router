import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/users" render={() => <Users greetingsMessage="Good Morning"/>}/>
      </BrowserRouter>
    );
  }
}

export default App;
