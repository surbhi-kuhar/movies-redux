import React from "react";
import { data } from "../data";
import Navbar from "./Navbar.js";
import MovieCard from "./MovieCard.js";
import { addMovies, setshowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.store.dispatch(addMovies(data));

    this.props.store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
  }

  isFavourite = (movie) => {
    const { favorites } = this.props.store.getState();

    const index = favorites.indexOf(movie);
    if (index !== -1) return true;
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setshowFavourites(val));
  };

  render() {
    const { list, favorites,showFavorites } = this.props.store.getState();

    console.log(this.props.store.getState());
    console.log(showFavorites);

    const displayMovies = showFavorites ? favorites : list;
    
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={index}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isFavourite(movie)}
                />
              );
            })}
          </div>

          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to display</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
