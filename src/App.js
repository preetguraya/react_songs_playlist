import React, { Component } from "react";
import songs from "./services/songs";
import SongCard from "./components/SongCard";

class App extends Component {
    constructor(props){
        super(props)
        this.state={songs:songs}
    }

    sortRating=()=> {
        //  let sortedSongs = this.state.songs.sort((a, b) => b.rating - a.rating)
        this.setState({ songs : [...this.state.songs.sort((a, b) => b.rating - a.rating)]  })
    }

    sortTitle=()=> {
         let sortedSongs = [...this.state.songs.sort((a, b) =>
            a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]
        this.setState({ songs : sortedSongs  })
    }
    
  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">Super - Songs of the Week</h2>
        <button className="st-btn" onClick={this.sortTitle}>Sort By Title</button>
        <button className="st-btn" onClick={this.sortRating}>Sort By Rating</button>
        <div id="song-list">
           <SongCard data={this.state.songs}/>
        </div>
      </div>
    );
  }
}

export default App;
