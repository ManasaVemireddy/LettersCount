// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPharse: '',
  }

  onChangeInput = event => {
    const {value} = event.target

    this.setState({inputPharse: value})
  }

  render() {
    const {inputPharse} = this.state

    return (
      <div className="letter-calculator-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="pharseText" className="description">
              Enter the phrase
            </label>
            <br />
            <input
              id="pharseText"
              type="text"
              placeholder="Enter the pharse"
              onChange={this.onChangeInput}
              className="search-input"
              value={inputPharse}
            />
          </div>
          <p className="letter-calculator-counter">
            No.of letters: {inputPharse.length}
          </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
