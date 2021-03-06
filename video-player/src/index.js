import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./Components/search_bar";
import VideoList from "./Components/video_list";
import VideoDetail from "./Components/video_detail";
const API_KEY = "AIzaSyALvAokjirery_gOkDGIeBl8VYtPCctCB4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.search("shit");
  }
  search(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div className="container">
        <SearchBar onSearchTermChange={searchTerm => this.search(searchTerm)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
