// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {value: ''}

  changeItems = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {value} = this.state
    const {destinationsList} = this.props

    const filterList = destinationsList.filter(item => {
      const name = item.name.toLowerCase()
      return name.includes(value)
    })

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-search">
          <input
            type="search"
            placeholder="Search"
            className="search"
            onChange={this.changeItems}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="container">
          {filterList.map(eachItem => (
            <DestinationItem details={eachItem} unique key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
