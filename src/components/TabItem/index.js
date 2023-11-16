// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabclassName = isActive ? 'active-btn' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tabs-container">
      <div className="list-items">
        <button
          type="button"
          className={`${activeTabclassName} tab-btn`}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </div>
    </li>
  )
}

export default TabItem
