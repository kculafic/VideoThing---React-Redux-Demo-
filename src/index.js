import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAqZGujr3hKG6uGcUe-RqFo6pA94GxFVeg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'radiohead'}, (data) => {
      this.setState({ videos: data });
    });
  }
  render () {
    return (
      <div>
        <h1>VideoThing</h1>
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// Take this component's generated HTML and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
