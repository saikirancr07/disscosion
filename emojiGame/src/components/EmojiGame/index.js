/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, store: [], isValid: true}

  shuffleTheEmojiList = id => {
    const {store} = this.state
    if (!store.includes(id)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        store: [...prevState.store, id],
      }))
    } else {
      this.setState({score: 0, store: [], isValid: false})
    }

    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, isValid} = this.state
    const {emojisList} = this.props
    return (
      <div className="bg-container">
        <NavBar score={score} />
        {isValid && (
          <ul className="list-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                shuffleTheEmojiList={this.shuffleTheEmojiList}
              />
            ))}
          </ul>
        )}
        {!isValid && <WinOrLoseCard />}
      </div>
    )
  }
}

export default EmojiGame
