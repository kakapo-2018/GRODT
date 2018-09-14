import React, { Component } from 'react';

class FactionIce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items1: [],
      items2: [],
      items3: [],
      items4: [],
      items5: []
    };
  }


  componentDidMount() {
    Promise.all([
      fetch("https://anapioficeandfire.com/api/characters?page=1&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=2&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=3&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=4&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=5&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=6&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=7&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=8&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=9&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=10&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=11&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=12&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=13&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=14&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=15&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=16&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=17&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=18&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=19&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=20&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=21&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=22&pageSize=50").then(res => res.json())
    ])
    .then(allCharacters => {
      console.log(allCharacters)
      return allCharacters.reduce((acc, arr) => {
        return [...acc, ...arr]
      }, [])
    })
    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          items1: [result[583], result[338], result[231], result[205], result[147]],
          items2: [result[956], result[1021], result[564], result[861], result[900]],
          items3: [result[953], result[0], result[0], result[0], result[0]],
          items4: [result[0], result[0], result[0], result[0], result[0]],
          items5: [result[0], result[0], result[0], result[0], result[0]]

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


      // .then(res => res.json())

  }

  handleClick(e) {
    //e.preventDefault();
    console.log('The link was clicked.', e);
    //appfunction()
    this.props.setCharacter(e)
  }

  render() {
    const { error, isLoaded, items1, items2, items3, items4 ,items5 } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="table">



          <table className='houseTableIce'>

            <tr className='tableRow'>
              {items1.map(item => {
                return <td className='houseCell'><a href='#'onClick={() => this.handleClick([item.name, item.url])}>{item.name}</a></td>
              })}
            </tr>

            <tr className='tableRow'>
              {items2.map(item => {
                return <td className='houseCell'><a href='#'onClick={() => this.handleClick([item.name, item.url])}>{item.name}</a></td>
              })}
            </tr>

            <tr className='tableRow'>
              {items3.map(item => {
                return <td className='houseCell'><a href='#'onClick={() => this.handleClick([item.name, item.url])}>{item.name}</a></td>
              })}
            </tr>

            <tr className='tableRow'>
              {items4.map(item => {
                return <td className='houseCell'><a href='#'onClick={() => this.handleClick([item.name, item.url])}>{item.name}</a></td>
              })}
            </tr>

            <tr className='tableRow'>
              {items5.map(item => {
                return <td className='houseCell'><a href='#'onClick={() => this.handleClick([item.name, item.url])}>{item.name}</a></td>
              })}
            </tr>

          </table>
        </div>
      );

    }
  }
}

export default FactionIce
