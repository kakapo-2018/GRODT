import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div onClick={this.props.reset} className="col header">
      </div>
    )
  }
}

export default Header
