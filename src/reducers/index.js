import {
  ADD_MOVIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_SHOW_FAVOURITES,
} from "../actions";

const initialState = {
  list: [],
  favorites: [],
  showFavorites: false,
};

export default function movies(state = initialState, actions) {
  switch (actions.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: actions.movies,
      };
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [actions.fav, ...state.favorites] };

    case REMOVE_FROM_FAVORITES:
      const filteredArray = state.favorites.filter(
        (movie) => movie.Title !== actions.movie.Title
      );

      return {
        ...state,
        favorites: filteredArray,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavorites: actions.val,
      };

    default:
      return state;
  }
}
