// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {cardDetails} = props
  const {name, starsCount, issuesCount, forksCount, avatarUrl} = cardDetails
  return (
    <li className="items">
      <img src={avatarUrl} className="logo" alt={name} />
      <h1 className="name">{name}</h1>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="icon"
          alt="stars"
        />
        <p>{starsCount}</p>
      </div>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="icon"
          alt="forks"
        />
        <p>{forksCount}</p>
      </div>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="icon"
          alt="open issues"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
