import './HistoryItem.css'

const HistoryItem = props => {
  const {historyItem, deleteElements} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem
  const deleteButton = () => {
    deleteElements(id)
  }

  return (
    <li className="list">
      <div className="list-items">
        <div className="list-history">
          <p>{timeAccessed}</p>
          <img src={logoUrl} alt="img" className="img" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button type="button" className="btn" onClick={deleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
