// Write your code here.
import './index.css'

const NavBar = props => {
  const {score} = props
  return (
    <nav className="navbar">
      <div className="left">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="right">
        <p className="score">Score: {score}</p>
        <p>TopScore</p>
      </div>
    </nav>
  )
}

export default NavBar
