import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get("/api/users").then(res => {
      console.log(res.data)
      this.setState({ users: res.data });
    });
  };

  createUser = () => {
    const payload = {
      name: this.state.user.name,
      password: this.state.user.password
    }
    axios.post('/api/users', payload).then((res) => {
      this.setState({redirectToHome: true, createdUser: res.data})
    }).catch((err) => {
      console.log(err)
    })
  }

  handleChange = (e) => {
    const user = {...this.state.user}
    user[e.target.name] = e.target.value
    this.setState({ user })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    this.createUser()
    this.getAllUsers()
  }

  render() {
    return (
      <div>
        <h1>login</h1>
        <h3>Select a user</h3>
        {this.state.users.map((user) => {
            return (<div key={user._id}><Link to={`/user/${user._id}`}>{user.name}</Link></div>)
        })}

        <div>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSignUp}>
            <div>
              <label htmlFor="name">Name</label>
              <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input onChange={this.handleChange} name="password" type="text" value={this.state.password}/>
            </div>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
