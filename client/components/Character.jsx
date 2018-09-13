import React, { Component } from 'react';

class Character extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://anapioficeandfire.com/api/characters/583")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {console.log('items', items)}
          <li>Name: {items.name}</li>
          <li>Culture: {items.Culture}</li>
          <li>Born: {items.born}</li>
          <li>Gender: {items.gender}</li>
          <li>Titles: {
              <ul>
                {items.aliases.map(item => (
                  <li>
                    {item}
                  </li>
                ))}
              </ul>
            }</li>
           <li>Played By: {
              <ul>
                {items.playedBy.map(item => (
                  <li>
                    {item}
                  </li>
                ))}
              </ul>
            }</li>

        </ul>
      );
    }
  }
}


 
export default Character;