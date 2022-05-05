// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeUpdateCount = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="search-input" className="para">
            Enter the phrase
          </label>
          <input
            placeholder="Calculator"
            className="search-input"
            id="search-input"
            type="search"
            onChange={this.onChangeUpdateCount}
            value={searchInput}
          />
          <div className="card">
            <p>No.of letters:{searchInput.length}</p>
          </div>
        </div>
        <div>
          <img
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
