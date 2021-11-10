import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    const {match: {params: {name}}} = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage } {name.toUpperCase()}, My awesome Users component </p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </ul>
      </div>
    );
  }
};

export default Users;
