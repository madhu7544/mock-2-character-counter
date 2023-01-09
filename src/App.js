import {Component} from 'react'
import {v4} from 'uuid'

import UserInput from './component/UserInput'

import './App.css'

class App extends Component {
  state = {list: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  addUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {list} = this.state
    return list.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="image"
      />
    ) : (
      list.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="main-container">
        <div className="display-container">
          <h1 className="head">Count the characters like a Boss...</h1>
          <div className="content">{this.renderUserInputs()}</div>
        </div>
        <div className="sec-container">
          <h1 className="heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.addUserInput}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <button className="button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
