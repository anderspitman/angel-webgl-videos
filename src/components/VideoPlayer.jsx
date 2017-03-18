import React from 'react';
import ReactDOM from 'react-dom';
import { VideoControl } from './VideoControl.jsx';

export class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.playbackRateStep = 0.25;

    this.state = {
      playbackRate: 1.0,
      currentTime: 0.0,
      totalTime: 0.0
    };

    this.onPlayPause = this.onPlayPause.bind(this);
    this.onIncreasePlaybackRate = this.onIncreasePlaybackRate.bind(this);
    this.onDecreasePlaybackRate = this.onDecreasePlaybackRate.bind(this);
  }
  render() {
    const style = {
      width: "100%"
    };

    return (
      <div>
        <video style={style} ref='video' controls preload="auto" >
          <source src={this.props.link} type="video/mp4"></source>
        </video>
        <VideoControl
            currentTime={this.state.currentTime}
            totalTime={this.state.totalTime}
            playbackRate={this.state.playbackRate}
            onPlayPause={this.onPlayPause}
            onIncreasePlaybackRate={this.onIncreasePlaybackRate}
            onDecreasePlaybackRate={this.onDecreasePlaybackRate} />
      </div>
    );
  }

  componentDidMount() {
    //this.refs.video.controls = false;
    this.setState({
      currentTime: this.refs.video.currentTime
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.link !== this.props.link) {
      this.refs.video.load();
      this.refs.video.play();
    }
    this.refs.video.playbackRate = this.state.playbackRate;
  }

  onPlayPause() {
     if (this.refs.video.paused || this.refs.video.ended) {
       this.refs.video.play();
     }
     else {
       this.refs.video.pause();
     }
  }

  onIncreasePlaybackRate() {
    this.setState((prevState, props) => {
      return { playbackRate: prevState.playbackRate + this.playbackRateStep }
    });
  }

  onDecreasePlaybackRate() {
    this.setState((prevState, props) => {
      return { playbackRate: prevState.playbackRate - this.playbackRateStep }
    });
  }
}
