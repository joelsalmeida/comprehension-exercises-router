import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch> 
        <Route exact path="/strict-access" render={() => <StrictAccess username="João" password="12345"/>} />
        <Route exact path="/users/:name" render={(props) => <Users {...props} greetingsMessage="Good Morning"/>}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
