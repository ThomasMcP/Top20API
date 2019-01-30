import React, { Component } from 'react';
import SongList from '../components/SongList.js';

class Top20 extends Component {
  constructor(props) {
    super(props);
    this.state= {
      songs: []
    }
  };

  componentDidMount(){
  const url = "https:itunes.apple.com/gb/rss/topsongs/limit=20/json"
  const request = new XMLHttpRequest();
  request.open('GET', url);

// when request is loaded.
  request.addEventListener( "load", () => {
    const jsonString = request.responseText;
      // convert json string.
    const songObjects = JSON.parse(jsonString);


    this.setState({ songs: songObjects })
  });

  request.send();
}

  render() {
    return (
      <div className="songBox">
      <h2>Top 20 Singles Chart</h2>
      <SongList songs={this.state.songs} />
      </div>
    );
  }
}





export default Top20;
