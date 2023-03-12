// Write your code here
import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {value: true}

  changeText = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  render() {
    const {value} = this.true
    const text = value ? 'Please Login' : 'Welcome User'
    const buttonText = value ? 'Login' : 'Logout'
    return (
      <div className="bg-container">
        <div className="card">
          <h1>{text}</h1>
          <button onClick={this.changeText} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
