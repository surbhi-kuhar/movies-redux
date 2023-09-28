import React from "react";
import { addToFavorites, removeFromFavorites } from "../actions";

class MovieCard extends React.Component {
  handleFavClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addToFavorites(movie));
  };

  handleUnFavClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavorites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavClick}
              >
                Unfavourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={this.handleFavClick}>
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
