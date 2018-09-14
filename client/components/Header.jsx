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
      <div className="col header">
        <img src="header-img.png"></img>
        <audio id="GOT" src="GOT.mp3" type="audio/mp3" controls="controls"></audio>
      </div>
    )
  }

}

export default Header
