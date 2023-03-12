// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {buttonText} = this.props
    return (
      <button className="button" type="button">
        {buttonText}
      </button>
    )
  }
}

export default Login
