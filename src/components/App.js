import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCAcMJzuypIMlQaN08wINFfK3RN1R1wTH0';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    });
    console.log(response.data.items)
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  componentDidMount() {
    this.onTermSubmit('disney')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} 
                
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
