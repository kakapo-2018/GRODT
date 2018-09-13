import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Character from './Character'
import Faction from './Faction'
import Other from './Other'

const App = () => (
  <Router>
    <div className='app-container section'>
      <Header/>
      <div className='container' >
        <div className='jumbotron' >
          <Faction/>
          <Character/>
          <Other/>
        </div>
      </div>
    </div>
  </Router>
)

export default App

{/* <Route exact path="/" component={ComponentToRender} /> */}
