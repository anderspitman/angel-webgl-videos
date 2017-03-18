import React from 'react';
import ReactDOM from 'react-dom';

export class VideoControl extends React.Component {
  render() {
    return (
      <div>
        <div>Playback Speed: {this.props.playbackRate}</div>
        <input type="button" value="Play/Pause"
            onClick={this.props.onPlayPause}></input>
        <ProgressText currentTime={this.props.currentTime} 
            totalTime={this.props.totalTime} />
        <input type="button" value="Increase Speed"
            onClick={this.props.onIncreasePlaybackRate}></input>
        <input type="button" value="Decrease Speed"
            onClick={this.props.onDecreasePlaybackRate}></input>
      </div>
    );
  }
}

class ProgressText extends React.Component {
  render() {
    return (
      <span>{this.props.currentTime} / {this.props.totalTime}</span>
    );
  }
}
