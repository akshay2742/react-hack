import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: "Login",
       user: "Guest"
    }
  }

  login = () => {
    this.setState({
        isLoggedIn: "LogOut",
        user: "Akshay"
    })
  }

  logout = () =>{
    this.setState({
        isLoggedIn: "Login",
        user: "Guest"
    })
  }
  
    render() {
    return (
      <div>
        <h1>{this.state.user}</h1>
        {this.state.isLoggedIn == "Login" ? <button onClick={this.login}>{this.state.isLoggedIn}</button>:
        <button onClick={this.logout}>{this.state.isLoggedIn}</button>}
      </div>
    )
  }
}

export default UserGreeting