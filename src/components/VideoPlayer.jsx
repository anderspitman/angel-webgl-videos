import React from 'react';
import ReactDOM from 'react-dom';
import { VideoControl } from './VideoControl.jsx';

export class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.playbackRateStep = 0.25;

    this.state = { playbackRate: 1.0 };

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
        <VideoControl playbackRate={this.state.playbackRate}
            onIncreasePlaybackRate={this.onIncreasePlaybackRate}
            onDecreasePlaybackRate={this.onDecreasePlaybackRate} />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.link !== this.props.link) {
      this.refs.video.load();
      this.refs.video.play();
    }
    this.refs.video.playbackRate = this.state.playbackRate;
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
