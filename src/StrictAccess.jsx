import React from 'react';
import { Link } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const {username, password} = this.props;
    const youMustPass = (username === "João" && password === "12345")
    
    return(
      <section>
        <h1>Strict Access</h1>
        {youMustPass? "Welcome João! :)" : alert("Access denied. :(")}
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
        </ul>
      </section>
    )
  }
}

export default StrictAccess;