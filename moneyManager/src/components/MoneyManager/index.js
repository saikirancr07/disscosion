import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: 'Income',
    transactionHistoryList: [],
    income: 0,
    expenses: 0,
  }

  changeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  changeTypeInput = event => {
    this.setState({typeInput: event.target.value})
  }

  createHistoryList = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state

    if (titleInput !== '' && amountInput !== '') {
      const newHistory = {
        id: v4(),
        title: titleInput,
        amount: amountInput,
        type: typeInput,
      }

      if (typeInput === 'Income') {
        this.setState(prevState => ({
          transactionHistoryList: [
            ...prevState.transactionHistoryList,
            newHistory,
          ],
          titleInput: '',
          amountInput: '',
          income: prevState.income + parseInt(amountInput),
        }))
      } else {
        this.setState(prevState => ({
          transactionHistoryList: [
            ...prevState.transactionHistoryList,
            newHistory,
          ],
          titleInput: '',
          amountInput: '',
          expenses: prevState.expenses + parseInt(amountInput),
        }))
      }
    }
  }

  deleteHistory = id => {
    const {transactionHistoryList} = this.state

    const deleteList = transactionHistoryList.filter(
      eachItem => eachItem.id === id,
    )
    let deleteIncome = 0
    let deleteExpenses = 0

    if (deleteList[0].type === 'Income') {
      deleteIncome = deleteList[0].amount
    } else {
      deleteExpenses = deleteList[0].amount
    }

    const filterList = transactionHistoryList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState(prevState => ({
      transactionHistoryList: filterList,
      income: prevState.income - parseInt(deleteIncome),
      expenses: prevState.expenses - parseInt(deleteExpenses),
    }))
  }

  render() {
    const {
      titleInput,
      amountInput,
      transactionHistoryList,
      income,
      expenses,
    } = this.state
    return (
      <div className="bg-container">
        <div className="top-section">
          <h1 className="top-heading">Hi, Richard</h1>
          <p className="top-para">
            Welcome back to your <span className="top-span">Money Manager</span>
          </p>
        </div>

        <MoneyDetails income={income} expenses={expenses} />

        <div className="bottom-section">
          <form className="form-container" onSubmit={this.createHistoryList}>
            <h1 className="form-heading">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              type="text"
              className="input"
              id="title"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.changeTitleInput}
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              type="text"
              className="input"
              id="amount"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.changeAmountInput}
            />
            <label htmlFor="type" className="label">
              TYPE
            </label>
            <select id="type" className="input" onChange={this.changeTypeInput}>
              {transactionTypeOptions.map(eachItem => (
                <option key={eachItem.displayText} value={eachItem.displayText}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="right-container">
            <h1 className="history">History</h1>
            <ul className="list-container">
              <li className="list-items">
                <div className="item">
                  <p>Title</p>
                </div>
                <div className="item">
                  <p>Amount</p>
                </div>
                <div className="item">
                  <p>Type</p>
                </div>
              </li>
              {transactionHistoryList.map(eachItem => (
                <TransactionItem
                  historyDetails={eachItem}
                  key={eachItem.id}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
