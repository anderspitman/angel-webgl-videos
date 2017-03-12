import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { VideoPlayer } from './video_player';
import { VideoLinkList } from './video_link_list';

export class App extends React.Component {
  constructor(props) {
    super(props);

    //this.state = Immutable.Map({ currentLink: "" });
    this.state = { currentLink: "https://www.cs.unm.edu/~angel/ONLINE_GRAPHICS/MPEGS/Angel_14_1_1.mp4" };

    this.selectedLinkChange = this.selectedLinkChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
          </div>
          <div className="col-xs-6">
            <VideoPlayer link={this.state.currentLink} />
          </div>
          <div className="col-xs-3">
            <VideoLinkList links={this.props.links}
              onChange={this.selectedLinkChange} />
          </div>
        </div>
      </div>
    );
  }

  selectedLinkChange(newLink) {
    //const newState = this.state.set("currentLink", newLink);
    this.setState({ currentLink: newLink });
  }
}
