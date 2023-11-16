// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-conatiner">
      <div className="card-container">
        <img src={imageUrl} className="app-image" alt={appName} />
        <h1 className="app-heading">{appName}</h1>
      </div>
    </li>
  )
}
export default AppItem
