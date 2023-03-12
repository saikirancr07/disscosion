// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item} = props
  const {suggestion} = item
  const {arrowClick} = props

  const changeInput = () => {
    arrowClick(suggestion)
  }

  return (
    <li className="items-container">
      <div className="history">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
          onClick={changeInput}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
