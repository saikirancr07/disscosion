// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="navbar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="navbar-logo"
      alt="website logo"
    />
    <ul className="navbar-list-container">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <button type="button" className="navbar-button">
        Login
      </button>
    </ul>
  </nav>
)

export default Header
