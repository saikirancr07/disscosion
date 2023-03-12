// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="list-items">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
