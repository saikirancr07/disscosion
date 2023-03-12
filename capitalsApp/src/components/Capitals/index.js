import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {value: countryAndCapitalsList[0].id}

  changeInput = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {value} = this.state
    console.log(value)

    const filterList = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === value,
    )
    console.log(filterList)

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="search">
            <select
              className="form-controls"
              id="input"
              onChange={this.changeInput}
            >
              <option value="NEW_DELHI">New Delhi</option>
              <option value="LONDON">London</option>
              <option value="PARIS">Paris</option>
              <option value="KATHMANDU">Kathmandu</option>
              <option value="HELSINKI">Helsinki</option>
            </select>
            <label htmlFor="input" className="label">
              is capital of which country?
            </label>
          </div>
          <p className="para">{filterList[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
