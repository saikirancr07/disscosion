// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, duration, description} = details
  return (
    <div className="course-card">
      <div className="title-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p>{duration}</p>
        </div>
        <p className="description">{description}</p>
        <div className="para-container">
          {details.tagsList.map(eachItem => (
            <p className="course-para">{eachItem.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseTimelineCard
