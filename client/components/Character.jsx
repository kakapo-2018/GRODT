import React, { Component } from 'react';


class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      image: ""
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
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      .then(
        fetch(`https://www.googleapis.com/customsearch/v1?q=jon snow&cx=003865435145121476457%3Atrepyhx0nie&searchType=image&key=AIzaSyApkbdj2rRQyrsyPJsS4H1rRnxYNSqa-tA`)
        .then(res => res.json())
        .then(
          (image) => {
            console.log('image', image)
            this.setState({
              isLoaded: true,
              image: image.items[0].link
            })
          })
      ) 
  }


  render() {
    const { error, isLoaded, items, image } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <img src={image} ></img>
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