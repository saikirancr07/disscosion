// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  changeInput = event => this.setState({searchInput: event.target.value})

  getArrowHistory = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filterList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <div className="container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-logo"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              value={searchInput}
              onChange={this.changeInput}
            />
          </div>
          <ul className="list-container">
            {filterList.map(eachItem => (
              <SuggestionItem
                item={eachItem}
                key={eachItem.id}
                arrowClick={this.getArrowHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
