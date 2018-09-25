import React, { Component } from "react";

class LogIn extends Component {
  state = {
    users: []
  };

  getAllUsers = () => {
    axios.get("localhost:3001/api/users").then(res => {
      this.setState({ users: res.data });
    });
  };

  render() {
    return (
      <div>
        <h1>login</h1>
        <h3>Select a user</h3>
      </div>
    );
  }
}

export default LogIn;
