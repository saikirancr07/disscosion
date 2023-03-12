// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  const items = timelineItemsList.map(eachItem => ({title: eachItem.title}))

  return (
    <div className="container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono items={items} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return <CourseTimelineCard details={eachItem} />
          }
          return <ProjectTimelineCard details={eachItem} />
        })}
      </Chrono>
    </div>
  )
}

export default TimeLineView
