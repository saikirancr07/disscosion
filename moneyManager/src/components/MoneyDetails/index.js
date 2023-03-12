// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const balance = income - expenses
  return (
    <div className="middle-section">
      <div className="card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="content">
          <p className="card-para">Your Balance</p>
          <p className="card-amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="content">
          <p className="card-para">Your Income</p>
          <p className="card-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="content">
          <p className="card-para">Your Expenses</p>
          <p className="card-amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
