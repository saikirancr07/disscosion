// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details
  return (
    <li className="list-items">
      <div className="left">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="right-items">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
