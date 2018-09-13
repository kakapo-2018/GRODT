import React, { Component } from 'react';

class FactionFire extends Component {
  constructor() {
    super();
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

  // componentDidMount() {
  //   fetch("https://anapioficeandfire.com/api/characters?page=1&pageSize=100")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result)
  //         this.setState({
  //           isLoaded: true,
  //           items1: [result[26], result[24], result[24], result[22], result[22]],
  //           items2: [result[26], result[24], result[24], result[22], result[22]],
  //           items3: [result[26], result[24], result[24], result[22], result[22]],
  //           items4: [result[26], result[24], result[24], result[22], result[22]],
  //           items5: [result[26], result[24], result[24], result[22], result[22]]

  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  componentDidMount() {
    Promise.all([
      fetch("https://anapioficeandfire.com/api/characters?page=1&pageSize=50").then(res => res.json()),
      fetch("https://anapioficeandfire.com/api/characters?page=2&pageSize=50").then(res => res.json())
    ])
    .then(allArrays => {
      console.log(allArrays)
      return allArrays.reduce((acc, arr) => {
        return [...acc, ...arr]
      }, [])
    })
    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          items1: [result[26], result[24], result[24], result[22], result[22]],
          items2: [result[26], result[24], result[24], result[22], result[22]],
          items3: [result[26], result[24], result[24], result[22], result[22]],
          items4: [result[26], result[24], result[24], result[22], result[22]],
          items5: [result[26], result[24], result[24], result[22], result[22]]

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

  render() {
    const { error, isLoaded, items1, items2, items3, items4 ,items5 } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="table">



          <table className='houseTable'>

            <tr className='tableRow'>
              {items1.map(item => {
                return <td className='houseCell'>{item.name}</td>
              })}
            </tr>

            <tr className='tableRow'>
              {items2.map(item => {
                return <td className='houseCell'>{item.name}</td>
              })}
            </tr>

            <tr className='tableRow'>
              {items3.map(item => {
                return <td className='houseCell'>{item.name}</td>
              })}
            </tr>

            <tr className='tableRow'>
              {items4.map(item => {
                return <td className='houseCell'>{item.name}</td>
              })}
            </tr>

            <tr className='tableRow'>
              {items5.map(item => {
                return <td className='houseCell'>{item.name}</td>
              })}
            </tr>

          </table>
        </div>
      );
    }
  }
}

export default FactionFire
