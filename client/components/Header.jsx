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
         <audio id="GOT" src="GOT.mp3" type="audio/mp3" controls="controls"></audio>
      </div>
    )
  }
}

export default Header
