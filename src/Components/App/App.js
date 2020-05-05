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
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

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

  savePlaylist() {
    // generates array of TrackURI from playlistTracks.
    // pass TrackURIs and playlistName to a method to save the playlist to User's account.
  }

  search(term) {
    console.log(`You are searching for the song ${term}`);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
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
