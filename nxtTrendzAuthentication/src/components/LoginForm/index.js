// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isCorrect: false, para: ''}

  getTheSuccessSubmit = () => {
    const {history} = this.props
    history.replace('/')
  }

  getTheFailureSubmit = error => {
    this.setState({isCorrect: true, para: error})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.getTheSuccessSubmit()
    } else {
      this.getTheFailureSubmit(data.error_msg)
    }
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  getTheUsername = () => (
    <div className="input-container">
      <label className="label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="input"
        placeholder="Username"
        onChange={this.onChangeUsername}
      />
    </div>
  )

  getThePassword = () => (
    <div className="input-container">
      <label className="label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="input"
        placeholder="Password"
        onChange={this.onChangePassword}
      />
    </div>
  )

  render() {
    const {para, isCorrect} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-logo"
          />
          {this.getTheUsername()}
          {this.getThePassword()}
          <button type="submit" className="submit-button">
            Login
          </button>
          {isCorrect && <p className="para">{para}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
