import React from 'react';
import ReactDOM from 'react-dom';

export class VideoLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };

    this.onClick = this.onClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  render() {

    const style = {};

    if (this.state.hover) {
      style.backgroundColor = "#e0e0e0";
      style.cursor = "default";
    }
    else {
      style.backgroundColor = "#ffffff";
    }

    if (this.props.selected) {
      style.backgroundColor = '#95edd7';
    }

    return (
      <div style={style} onClick={this.onClick}
          onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
        {this.props.link.label}
      </div>
    );
  }

  onClick() {
    this.props.onChange(this.props.index, this.props.link.url);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }
}
