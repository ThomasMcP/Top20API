import React, { Component } from "react";
import Song from './Song.js';

class SongList extends Component {
  render (){
    const songSections = this.props.songs.map(song => {
      return (
        <Song title={song.title} key={song.id}></Song>
      );
    });

    return (
      <div className="song-list">
        {songSections}
      </div>
    )
  }
}

export default SongList;
