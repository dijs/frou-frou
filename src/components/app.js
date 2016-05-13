import React from 'react'
import 'whatwg-fetch'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.sendTurnCounterClockwise = this.sendTurnCounterClockwise.bind(this)
    this.sendTurnClockwise = this.sendTurnClockwise.bind(this)
    this.sendMoveForward = this.sendMoveForward.bind(this)
    this.sendStopMotion = this.sendStopMotion.bind(this)
    window.onload = this.handleLoad.bind(this)
    window.onunload = this.handleUnload.bind(this)
  }
  handleLoad() {
    this.setState({
      message: 'Opening communication...'
    })
    fetch('/open').then(() => {
      this.setState({
        message: 'Opened communication.'
      })
    })
  }
  handleUnload() {
    fetch('/close').then(() => {
      this.setState({
        message: 'Closing communication...'
      })
    })
  }
  sendTurnCounterClockwise() {
    fetch('/turn/counter-clockwise').then(() => {
      this.setState({
        message: 'Turning counter clockwise...'
      })
    })
  }
  sendTurnClockwise() {
    fetch('/turn/clockwise').then(() => {
      this.setState({
        message: 'Turning clockwise...'
      })
    })
  }
  sendMoveForward() {
    fetch('/move/forward').then(() => {
      this.setState({
        message: 'Moving forward...'
      })
    })
  }
  sendStopMotion() {
    fetch('/stop-motion').then(() => {
      this.setState({
        message: 'Stopped motion.'
      })
    })
  }
  render() {
    return (
      <div className="app">
        <div className="no-select message">{this.state.message}</div>
        <i className="fa no-select fa-rotate-left counter-clockwise"
          onTouchStart={this.sendTurnCounterClockwise} onTouchEnd={this.sendStopMotion} />
        <i className="fa no-select fa-rotate-right clockwise"
          onTouchStart={this.sendTurnClockwise} onTouchEnd={this.sendStopMotion} />
        <i className="fa no-select fa-arrow-up forward"
          onTouchStart={this.sendMoveForward} onTouchEnd={this.sendStopMotion} />
      </div>
    )
  }
}
