import React from "react";
import { data } from "../data";
import Navbar from "./Navbar.js";
import MovieCard from "./MovieCard.js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>
      </div>

      <div className="list">
        {data.map(movie => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default App;
