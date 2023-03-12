// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncreaseSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="para1">Speed is {speed}mph</h1>
        <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button1"
            onClick={this.onIncreaseSpeed}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="button2"
            onClick={this.onDecreaseSpeed}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
