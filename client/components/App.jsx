import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Character from './Character'
import FactionIce from './FactionIce'
import FactionFire from './FactionFire'
import Other from './Other'

const App = () => (
  <Router>
    <div className='app-container section'>
      <div className='container' >
        <div className='jumbotron' >
          {/* <FactionFire /> */}
          <Header />
          <Main />
          <FactionIce />
          <Character />
          <Other />
        </div>
      </div>
    </div>
  </Router>
)

export default App

{/* <Route exact path="/" component={ComponentToRender} /> */ }
