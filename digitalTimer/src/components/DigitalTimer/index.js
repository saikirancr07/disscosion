// Write your code here
import {Component} from 'react'
import './index.css'

const initialList = {
  isValid: true,
  initialMinutes: 25,
  initialSeconds: 0,
}

class DigitTimer extends Component {
  state = initialList

  onIncrementMinutes = () => {
    this.setState(prevState => ({initialMinutes: prevState.initialMinutes + 1}))
  }

  onDecrementMinutes = () => {
    this.setState(prevState => ({initialMinutes: prevState.initialMinutes - 1}))
  }

  clearTimerInterval = () => clearInterval(this.timerId)

  updateSeconds = () => {
    this.setState(prevState => ({initialSeconds: prevState.initialSeconds + 1}))
  }

  changeTheStateReset = () => {
    this.clearTimerInterval()
    this.setState(initialList)
  }

  changeTheState = () => {
    const {isValid, initialMinutes, initialSeconds} = this.state
    console.log(isValid)

    const isCompleted = initialSeconds === initialMinutes * 60

    if (isCompleted) {
      this.setState(prevState => ({isValid: !prevState.isValid}))
    }
    if (isValid) {
      this.timerId = setInterval(this.updateSeconds, 1000)
    } else {
      this.clearTimerInterval()
    }
    this.setState(prevState => ({isValid: !prevState.isValid}))
  }

  getTheTimer = () => {
    const {initialMinutes, initialSeconds} = this.state
    const totalSeconds = initialMinutes * 60 - initialSeconds

    const minutes = parseInt(totalSeconds / 60)
    const seconds = totalSeconds % 60

    const filterMinutes = minutes > 9 ? minutes : `0${minutes}`
    const filterSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${filterMinutes}:${filterSeconds}`
  }

  render() {
    const {isValid, initialSeconds} = this.state
    const isDisabled = initialSeconds > 0
    const iconUrl = isValid
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    const startPausePara = isValid ? 'Start' : 'Pause'
    const paragraph = isValid ? 'Paused' : 'running'
    const iconAlt = isValid ? 'play icon' : 'pause icon'
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="container">
          <div className="image-container">
            <div className="timer">
              <h1 className="time">{this.getTheTimer()}</h1>
              <p className="para">{paragraph}</p>
            </div>
          </div>
          <div className="content">
            <div className="start-reset">
              <div className="start">
                <button
                  type="button"
                  className="start-button"
                  onClick={this.changeTheState}
                >
                  <img src={iconUrl} alt={iconAlt} className="icon" />
                  <p className="para">{startPausePara}</p>
                </button>
              </div>
              <div className="reset">
                <button
                  type="button"
                  className="reset-button"
                  onClick={this.changeTheStateReset}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="icon"
                  />
                  <p className="para">Reset</p>
                </button>
              </div>
            </div>
            <p className="limit">Set Timer Limit</p>
            <div className="plus-minus-container">
              <button
                className="plus-minus"
                type="button"
                onClick={this.onDecrementMinutes}
                disabled={isDisabled}
              >
                -
              </button>
              <button type="button" className="button">
                <p className="button-para">25</p>
              </button>
              <button
                className="plus-minus"
                type="button"
                onClick={this.onIncrementMinutes}
                disabled={isDisabled}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitTimer
