import React, { Component } from 'react';
import FactionFire from './FactionFire'

class Main extends Component {
    constructor() {
      super();
    }

    render() {
        return (
            <div className='wrapper'>
                
                <div className='fire'>
                    <h1>Fire</h1>
                    <FactionFire />
                </div>
                
                <div className='ice'>
                    <h1>Ice</h1>
                </div>

            </div>

        )
    }
}

export default Main;