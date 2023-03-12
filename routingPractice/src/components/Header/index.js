// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="left">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="logo-para">Wave</p>
    </div>
    <ul className="right">
      <li className="list-item">
        <Link to="/" className="line">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link to="/about" className="line">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link to="/contact" className="line">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
