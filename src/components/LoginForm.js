import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.usernameChange}/>
          </label>
          <p>{this.state.username}</p>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.passChange}/>
          </label>
          <p>{this.state.password}</p>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
