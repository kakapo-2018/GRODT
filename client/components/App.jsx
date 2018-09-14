import React, { Component } from 'react';

import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Character from './Character'
import FactionIce from './FactionIce'
import FactionFire from './FactionFire'
import Other from './Other'

let displayChar = false;
let displayFaction = ''
let displayFactionChoice = true;

{/* <Route exact path="/" component={ComponentToRender} /> */ }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: '',
        url: '',
        
     }
     this.setCharacter = this.setCharacter.bind(this)
     this.setFaction = this.setFaction.bind(this)
     this.reset = this.reset.bind(this)

  }

  setCharacter(array){
    this.setState({
      name: array[0],
      url: array[1]
    });
    displayChar = true;
    displayFaction = ''
    
    console.log('The array was displayyed.', array);
  }

  setFaction(faction){
    console.log('faction', faction)
    displayFaction = faction;
    displayFactionChoice = false;
    this.forceUpdate()
  }

  reset(){
    displayChar = false;
    displayFaction = ''
    displayFactionChoice = true;
    this.forceUpdate()
  }

  render() { 
    return ( 
      <Router>
      <div className='app-container section'>
        <div className='container' >
          <div className='jumbotron' >
        <Header reset={this.reset} />

        {displayFactionChoice && <Main setFaction={this.setFaction} />}
            {displayFaction == 'fire' && <FactionFire setCharacter={this.setCharacter} />}
            {displayFaction == 'ice' && <FactionIce setCharacter={this.setCharacter} />}

            {displayChar && < Character name={this.state.name} url ={this.state.url}/>}
          </div>
        </div>
      </div>
    </Router>
     );
  }
}
 
export default App;