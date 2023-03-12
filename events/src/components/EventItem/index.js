// Write your code here
import './index.css'

const EventItem = props => {
  const {details} = props
  const {imageUrl} = details

  return (
    <li className="list-item">
      <div className="card">
        <button type="button">
          <img src={imageUrl} className="image" alt="event" />
        </button>
      </div>
    </li>
  )
}

export default EventItem
