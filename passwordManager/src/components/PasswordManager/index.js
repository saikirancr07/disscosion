import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="user-interact-container">
            <div className="user-inputs-card">
              <form className="form-container">
                <h1 className="input-heading">Add New Password</h1>
                <div className="input-card">
                  <div className="input-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="input-icon"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input"
                  />
                </div>
                <div className="input-card">
                  <div className="input-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="website"
                      className="input-icon"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input"
                  />
                </div>
                <div className="input-card">
                  <div className="input-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="website"
                      className="input-icon"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input"
                  />
                </div>
                <div className="submit-button-container">
                  <button type="button" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="top-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="top-image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
