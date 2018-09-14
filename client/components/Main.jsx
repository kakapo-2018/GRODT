import React, { Component } from 'react';
import FactionFire from './FactionFire'

class Main extends Component {
    constructor(props) {
      super(props);
    }

    handleClick(e) {
        //e.preventDefault();
        console.log('The link was clicked.', e);
        //appfunction()
        this.props.setFaction(e)
      }

    render() {
        return (
            <div className='wrapper'>
                
                <div onClick={() => this.handleClick('fire')} className='fire'>
                    <h1>Fire</h1>
                </div>
                
                <div onClick={() => this.handleClick('ice')} className='ice'>
                    <h1>Ice</h1>
                </div>

            </div>

        )
    }
}

export default Main;