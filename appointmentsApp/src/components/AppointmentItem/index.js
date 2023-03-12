// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, changeIsActive} = props
  const {name, description, isActive, id} = appointmentDetails

  const imgUrl = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const dateAndTime = format(new Date(description), 'dd MMMM yyyy, EEEE')

  const clickTheButton = () => {
    changeIsActive(id)
  }

  return (
    <li className="list-items">
      <div>
        <p className="name">{name}</p>
        <p className="description">{dateAndTime}</p>
      </div>
      <button
        type="button"
        className="star-button"
        onClick={clickTheButton}
        data-testid="star"
      >
        <img src={imgUrl} alt="star" className="star-icon" />
      </button>
    </li>
  )
}

export default AppointmentItem
