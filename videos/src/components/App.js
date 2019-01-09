import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount(){
    this.handleTermSubmit('react.js');
  };
  handleTermSubmit = async term => {
    // below is a preconfigured instance of axios
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ 
        videos: response.data.items,
        selectedVideo: response.data.items[0] 
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar handleTermSubmit={this.handleTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                handleVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
