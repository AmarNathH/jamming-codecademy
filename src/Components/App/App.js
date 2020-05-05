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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);

  }

  addTrack(track) {
    if( !this.state.playlistTracks.some(playlistTrack => (playlistTrack.id === track.id)) ) {
      this.setState({playlistTracks : [ this.state.playlistTracks, track ]});
    }
  }

  removeTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks.filter(playlistTrack => (playlistTrack.id !== track.id));
    this.setState({playlistTracks: newPlaylistTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
