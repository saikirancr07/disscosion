// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails, deleteHistory} = props
  const {type, title, amount, id} = historyDetails

  const clickTheButton = () => {
    deleteHistory(id)
  }
  return (
    <li className="items">
      <div className="contain">
        <p>{title}</p>
      </div>
      <div className="contain">
        <p>{amount}</p>
      </div>
      <div className="contain">
        <p>{type}</p>
      </div>
      <button
        type="button"
        data-testid="delete"
        className="delete-button"
        onClick={clickTheButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
