// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {details, changeTheActiveId, isActive} = props
  const {id, language} = details
  const activeButton = isActive ? 'active-button' : ''

  const clickTheButton = () => {
    changeTheActiveId(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${activeButton}`}
        onClick={clickTheButton}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
