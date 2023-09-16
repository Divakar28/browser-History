import {Component} from 'react'

import './History.css'

import HistoryItem from '../HistoryItem/HistoryItem'

class History extends Component {
  state = {userInput: ''}

  onClickElement = event => {
    this.setState({userInput: event.target.value})
  }

  deleteElements = id => {
    const {initialHistoryList} = this.state
    const deleteFilter = initialHistoryList.filter(each => each.id !== id)

    this.setState({initialHistoryList: deleteFilter})
  }

  render() {
    const {userInput} = this.state
    const {initialHistoryList} = this.props
    console.log(userInput)
    const filteredList = initialHistoryList.filter(
      each =>
        each.title.toLowerCase().includes(userInput) ||
        each.title.toUpperCase().includes(userInput),
    )

    return (
      <div>
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <div className="se">
              <input
                type="search"
                className="search-con"
                onChange={this.onClickElement}
              />
            </div>
          </div>
        </div>
        <ul>
          {filteredList.map(each => (
            <HistoryItem
              historyItem={each}
              key={each.id}
              deleteElements={this.deleteElements}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default History
