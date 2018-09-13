import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  render() {
    return (
      <Router>
        <div className='app'>

          <Header />
          {/* <h1>Hello World</h1> */}
          {/* <Route exact path="/" component={ComponentToRender} /> */}
        </div>

      </Router>
    )
  }

}

export default App
