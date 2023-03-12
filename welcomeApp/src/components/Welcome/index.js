// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onChangeText = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(prevState => ({text: 'Subscribed'}))
    } else {
      this.setState(prevState => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <h1 className="sub-heading">Thank you! Happy Learning</h1>
        <button className="button" type="button" onClick={this.onChangeText}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
