import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.jsx';

const videoUrl = "https://www.cs.unm.edu/~angel/ONLINE_GRAPHICS/MPEGS/";

$.get("video_data.json", gotData);

function gotData(data) {

  const links = data.videos.map(video => {
    return {
      url: data.base_url + video.filename,
      label: video.title
    }
  });

  ReactDOM.render(
    <App links={links} />,
    document.getElementById('app')
  );
}

