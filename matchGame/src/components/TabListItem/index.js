import './index.css'

const TabListItem = props => {
  const {tabDetails, getTheImagesBasedOnTabId} = props
  const {tabId, displayText} = tabDetails

  const giveTheTabId = () => {
    getTheImagesBasedOnTabId(tabId)
  }

  return (
    <li className="list-item" onClick={giveTheTabId}>
      <p className="tab-para">{displayText}</p>
    </li>
  )
}

export default TabListItem
