import './index.css'

const HistoryObjectItem = props => {
  const {item, deleteButton} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const clickTheButton = () => {
    deleteButton(id)
  }

  return (
    <li className="items-container">
      <p className="time">{timeAccessed}</p>
      <div className="logo-title">
        <div className="history">
          <img src={logoUrl} className="logo-url" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button className="button" type="button" onClick={clickTheButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="domain-url"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryObjectItem
