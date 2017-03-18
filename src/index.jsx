import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.jsx';

const videoUrl = "https://www.cs.unm.edu/~angel/ONLINE_GRAPHICS/MPEGS/";

fetch("video_data.json", gotData)
.then(response => response.text())
.then(text => {
  gotData(JSON.parse(text));
});

function gotData(data) {

  const links = data.videos.map(video => {
    return {
      url: data.base_url + video.filename,
      label: video.title
    }
  });

  ReactDOM.render(
    <App links={links} />,
    document.getElementById('app-root')
  );
}

