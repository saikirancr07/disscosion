// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangosCount: 0, bananasCount: 0}

  onMango = () => {
    this.setState(prevState => ({mangosCount: prevState.mangosCount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangosCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate<span className="span"> {mangosCount} </span>mangoes
            <span className="span"> {bananasCount} </span>bananas
          </h1>
          <div className="card-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <div>
                <button className="button" onClick={this.onMango} type="button">
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <div>
                <button
                  className="button"
                  onClick={this.onBanana}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
