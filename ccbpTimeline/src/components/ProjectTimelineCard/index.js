// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, duration, imageUrl, description, projectUrl} = details
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="duration-container-project">
        <h1>{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
