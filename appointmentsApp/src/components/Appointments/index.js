// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  changeTitleValue = event => {
    this.setState({title: event.target.value})
  }

  changeDateValue = event => {
    this.setState({date: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {title, date} = this.state
    if (title !== '' && date !== '') {
      const newAppointment = {
        id: uuidv4(),
        name: title,
        description: date,
        isActive: false,
      }

      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  changeIsActive = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isActive: !eachItem.isActive}
        }
        return eachItem
      }),
    }))
  }

  changeAppoinmentsList = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        eachItem => eachItem.isActive === true,
      ),
    }))
  }

  render() {
    const {title, date, appointmentsList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="top-section">
            <form className="form-container" onSubmit={this.submitForm}>
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="input-text" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="input-text"
                placeholder="Title"
                className="input-text"
                value={title}
                onChange={this.changeTitleValue}
              />
              <label htmlFor="input-date" className="label">
                DATE
              </label>
              <input
                type="date"
                className="input-date"
                id="input-date"
                placeholder="Date"
                value={date}
                onChange={this.changeDateValue}
              />
              <button className="submit-button" type="submit">
                Add
              </button>
            </form>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="image"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="bottom-section">
            <div className="appointments">
              <h1 className="heading">Appointments</h1>
              <button
                className="starred-button"
                type="button"
                onClick={this.changeAppoinmentsList}
              >
                Starred
              </button>
            </div>
            <ul className="list-container">
              {appointmentsList.map(eachItem => (
                <AppointmentItem
                  key={eachItem.id}
                  appointmentDetails={eachItem}
                  changeIsActive={this.changeIsActive}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
