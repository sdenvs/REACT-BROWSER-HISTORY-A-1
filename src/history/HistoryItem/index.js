import './index.css'

const HistoryItem = props => {
  const {HistoryItemD, deleteHist} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = HistoryItemD
  const deleleH = () => {
    deleteHist(id)
  }

  return (
    <li className="historyItem">
      <p className="time1">{timeAccessed}</p>
      <div className="style1">
        <div className="style2">
          <img className="webLogo" alt="domain logo" src={logoUrl} />
          <div className="style3">
            <p className="time">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <div>
          <img
            onClick={deleleH}
            className="deleteIcon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
