import React from 'react'
import { Link } from 'react-router-dom'


class SignUpForm extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state.usernameInput)
    console.log(this.state.passwordInput)
    const userParams = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    }
    this.props.onSignUp(userParams)

    this.setState({
      usernameInput: "",
      passwordInput: ""
    })
  }

  handleUsernameChange = (event) => {

    this.setState({
      usernameInput: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="form-background-images">
        </div>
        <div className="form-background">
        </div>
        <div className="form-wrapper">
            <form onSubmit={this.handleSubmit} className="user-form">
              <h1>Sign Up</h1>
              <div className="field">
                <div className="ui left fluid icon input">
                  <i className="user icon"></i>
                  <input type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
                </div>
              </div>
              <div className="field">
                <div className="ui left fluid icon input">
                  <i className="lock icon"></i>
                  <input type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.passwordInput} />
                </div>
              </div>
              <input className="ui fluid large submit button" type="submit" value="Sign Up"/>
            </form>
            <div className="ui message login-msg">
              Already Registered? <Link to={`/login`}>Log In</Link>
            </div>
        </div>
      </div>






    )
  }
}


export default SignUpForm
