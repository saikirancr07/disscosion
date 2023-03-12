// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isValid: true}

  changeIsValid = () => {
    this.setState(prevState => ({isValid: !prevState.isValid}))
  }

  render() {
    const {isValid} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    let container
    if (isValid) {
      container = (
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="images-container">
            {emojis.map(eachItem => (
              <li key={eachItem.id} className="image-items">
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="image"
                  onClick={this.changeIsValid}
                />
                <p className="para">{eachItem.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      container = (
        <div className="card">
          <img src={loveEmojiUrl} className="image" alt="love emoji" />
          <h1 className="heading">Thank You!</h1>
          <p className="para">
            We will use your feedback to improve our customer performance
          </p>
        </div>
      )
    }

    return <div className="bg-container">{container}</div>
  }
}

export default Feedback
