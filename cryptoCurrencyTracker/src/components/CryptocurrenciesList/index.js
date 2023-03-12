// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoCurrencyList: []}

  componentDidMount() {
    this.getTheCryptoCurrencyList()
  }

  getTheCryptoCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({cryptoCurrencyList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoCurrencyList} = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="list-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
                className="image"
              />
            </div>

            <li className="table">
              <p>Coin Type</p>
              <div className="right">
                <p className="usd">USD</p>
                <p className="euro">EURO</p>
              </div>
            </li>
            {cryptoCurrencyList.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
