import { combineReducers } from "redux";

import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false
};

export  function movies(state = initialMovieState, action) {
  // if(action.type === ADD_MOVIES){
  //    return {
  //     ...state,
  //     list: action.movies
  //    };
  // }
  // return state;
  console.log('Movies Reducer');
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES: 
     return {
      ...state, 
      showFavourites: action.val
     }
    default:
      return state;
  }
}

const initialSearchState = {
  result: {}
};

export function search (state = initialSearchState , action ){
  console.log('Search Reducer');
  return state; 
} 

const initialRootState = {
  movies: initialMovieState,
  search: initialSearchState
}

//root reducer which has every reducers 
// export default function rootReducer (state= initialRootState, action) {
//   return{
//     movies: movies(state.movies, action),
//     search: search(state.search,action)
//   }
// }

//this default combine reducer comes inbuilt from redux and works same as the rootReducer which we created above 
export default combineReducers({
  movies: movies,
  search: search
})