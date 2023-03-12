// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isValid: false}

  render() {
    const {details} = this.props
    const {isValid} = this.state
    const {questionText, answerText} = details

    const imageUrl = isValid
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altName = isValid ? 'minus' : 'plus'

    const clickTheButton = () => {
      this.setState(prevState => ({isValid: !prevState.isValid}))
    }

    return (
      <li className="list-items">
        <div className="question">
          <h1 className="question-para">{questionText}</h1>
          <button type="button" className="button">
            <img
              src={imageUrl}
              alt={altName}
              className="icon"
              onClick={clickTheButton}
            />
          </button>
        </div>
        {isValid && (
          <>
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem
