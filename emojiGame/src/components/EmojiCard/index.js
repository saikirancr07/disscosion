// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffleTheEmojiList} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const clickTheImage = () => {
    shuffleTheEmojiList(id)
  }
  return (
    <li className="details" onClick={clickTheImage}>
      <button type="button" className="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
