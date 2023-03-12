// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="heading">Faqs</h1>
          <ul className="list-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                details={eachFaq}
                key={eachFaq.id}
                updateState={this.updateState}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
