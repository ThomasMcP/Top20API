import React, { Component } from "react";

class Song extends Component {
  render() {
    return (
      <div className="song">
        <h4>Title: {this.props.feed.entry.title}</h4>
        <img src={this.props.feed.entry[im:image]} />
      </div>
    );
  }
}

export default Song;
