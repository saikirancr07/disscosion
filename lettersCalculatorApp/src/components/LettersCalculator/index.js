// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {length: 0}

  calculateLength = event => {
    this.setState({length: event.target.value.length})
  }

  render() {
    const {length} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="inputId">
            Enter the phrase
          </label>
          <input
            type="search"
            id="inputId"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.calculateLength}
          />
          <p className="button">No.of Letters: {length}</p>
        </div>
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="Letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
