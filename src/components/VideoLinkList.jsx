import React from 'react';
import ReactDOM from 'react-dom';
import { VideoLink } from './VideoLink.jsx';

export class VideoLinkList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { selectedIndex: 0 };

    this.onChildClicked = this.onChildClicked.bind(this);
  }

  render() {
    const links = this.props.links.map((link, index) => {

      const selected = index === this.state.selectedIndex;

      return (
        <VideoLink key={index} index={index} selected={selected}
            link={link} onChange={this.onChildClicked} />
      );
    });

    const style = {
      height: "auto",
      "maxHeight": "400px",
      "overflowY": "scroll" 
    };

    return (
      <div style={style}>
        {links}
      </div>
    );
  }

  onChildClicked(index, url) {
    console.log(index);
    this.setState({ selectedIndex: index });
    this.props.onChange(url);
  }
}


