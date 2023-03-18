import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>
          The Button has been clicked <br />
          <span className="span-element">{count}</span> times
        </h1>
        <div>
          <p>Click the button to increase the count </p>
        </div>
        <button type="button" className="button" onClick={this.onClicked}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
