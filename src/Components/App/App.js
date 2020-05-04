import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{
        id: 1,
        name: "Something Just like this",
        artist: 'Coldplay',
        album: 'Coldplay'
      }],

      playlistName: "Myfav",

      playlistTracks: [{
        id: 2,
        name: "Roses",
        artist: 'Chainsmokers',
        album: 'Chainsmokers'
      }]
    };

    this.addTrack = this.addTrack.bind(this);

  }

  addTrack(track) {
    if( !this.state.playlistTracks.some(playlistTrack => (playlistTrack.id === track.id)) ) {
      this.setState({playlistTracks : [ this.state.playlistTracks, track ]});
    }

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
