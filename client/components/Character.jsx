import React, { Component } from 'react';

const api_key = 'AIzaSyApkbdj2rRQyrsyPJsS4H1rRnxYNSqa-tA'

//https://www.googleapis.com/customsearch/v1?q=littlefinger&cx=003865435145121476457%3Atrepyhx0nie&searchType=image&key=AIzaSyApkbdj2rRQyrsyPJsS4H1rRnxYNSqa-tA

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      images: ""
    };
  }
// `https://www.googleapis.com/customsearch/v1?q=${items.name}&cx=003865435145121476457%3Atrepyhx0nie&searchType=image&key=AIzaSyApkbdj2rRQyrsyPJsS4H1rRnxYNSqa-tA`

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
      .finally(
        
        fetch(`https://www.googleapis.com/customsearch/v1?q=${this.state.items.name}&cx=003865435145121476457%3Atrepyhx0nie&searchType=image&key=AIzaSyApkbdj2rRQyrsyPJsS4H1rRnxYNSqa-tA`)
        .then(res => res.json())
        .then(
          (image) => {
            console.log('image', image)
            this.setState({
              isLoaded: true,
              images: image.items[0].link
            })
          })
      ) 
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('heyyy')
    // fetch(`https://www.googleapis.com/customsearch/v1?q=littlefinger&cx=003865435145121476457%3Atrepyhx0nie&searchType=image&key=AIzaSyApkbdj2rRQyrsyPJsS4H1rRnxYNSqa-tA`)
    //     .then(res => res.json())
    //     .then(
    //       (image) => {
    //         console.log('image', image)
    //         this.setState({
    //           isLoaded: true,
    //           images: image.items[0].link
    //         })
    //       })
  }

  render() {
    const { error, isLoaded, items, images } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <img src={images} ></img>
          <li>Name: {items.name}</li>
          <li>Culture: {items.culture}</li>
          <li>Born: {items.born}</li>
          <li>Gender: {items.gender}</li>
          <li>Titles: {
            <div className="row">
              <div className="col-4">
                <ul className="list-group">
                  {items.aliases.map(item => (
                    <li className="list-group-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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