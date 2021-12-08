import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class HistoryHome extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    this.state = {search: '', initialList: initialHistoryList}
  }

  Changed = event => {
    this.setState({search: event.target.value})
  }

  deleteHistory = id => {
    const {initialList} = this.state
    const ModifList = initialList.filter(eachItem => eachItem.id !== id)
    console.log(ModifList)
    this.setState({initialList: ModifList})
  }

  render() {
    const {initialList, search} = this.state
    const showList = initialList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div>
        <nav className="navbar">
          <div>
            <img
              className="logoImg"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
          </div>
          <div className="searchDiv">
            <img
              className="searchIcon"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              onChange={this.Changed}
              placeholder="Search history"
              className="inputEl"
              type="search"
            />
          </div>
        </nav>
        {showList.length > 0 ? (
          <ul className="historyList">
            {showList.map(eachItem => (
              <HistoryItem
                deleteHist={this.deleteHistory}
                key={eachItem.id}
                HistoryItemD={eachItem}
              />
            ))}
          </ul>
        ) : (
          <p className="noElement">There is no history to show</p>
        )}
      </div>
    )
  }
}

export default HistoryHome
