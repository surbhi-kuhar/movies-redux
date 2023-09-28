export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FAVORITES';
export const SET_SHOW_FAVOURITES = 'SHOW_FAVOURITES';

export function addMovies(data) {
  return {
    type: ADD_MOVIES,
    movies: data,
  };
}

export function addToFavorites(movie){
    return{
        type:ADD_TO_FAVORITES,
        fav:movie
    }
}

export function removeFromFavorites(movie){
    return{
        type:REMOVE_FROM_FAVORITES,
        movie
    }
}

export function setshowFavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}
