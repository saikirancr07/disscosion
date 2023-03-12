// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bottom-section">
          <div className="content">
            <h1>Clothes That Get YOU Noticed</h1>
            <p>Fashion is part of the daily air</p>
            <button type="button" className="bottom-section-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="bottom-section-image"
          />
        </div>
      </div>
    )
  }
}

export default Home
