import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { videos: [] };
    handleTermSubmit = async (term) => {
        // below is a preconfigured instance of axios
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response.data.items);
        this.setState({ videos: response.data.items });
    };
    render(){
        return(
            <div className="ui container">
                <SearchBar handleTermSubmit={this.handleTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    };
};

export default App;