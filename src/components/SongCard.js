import React from "react";
import Rating from "./Rating";
import PropTypes from "prop-types";

const SongCard = (props) => {
  return props.data.map((song) => (
    <div className="song-card">
      <img className="st-thumb" src={song.thumb} alt="no-img" />
      <div className="song-title">
        {song.title} by {song.artist}
      </div>
      <Rating stars={song.rating} />
    </div>
  ));
};

SongCard.propTypes = {
    data: PropTypes.shape({
        thumb: PropTypes.string,
        title: PropTypes.string,
        artist: PropTypes.string,
        rating: PropTypes.number
    })
}

export default SongCard;
