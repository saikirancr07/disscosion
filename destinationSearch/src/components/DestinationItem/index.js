// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  return (
    <li className="item">
      <img src={details.imgUrl} className="image" alt={details.name} />
      <p className="para">{details.name}</p>
    </li>
  )
}

export default DestinationItem
