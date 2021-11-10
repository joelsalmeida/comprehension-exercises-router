import React from 'react';

class StrictAccess extends React.Component {
  render() {
    const {username, password} = this.props;
    const youMustPass = (username === "João" && password === "12345")
    
    return(
      <section>
        <h1>Strict Access</h1>
        {youMustPass? "Welcome João! :)" : alert("Access denied. :(")}
      </section>
    )
  }
}

export default StrictAccess;