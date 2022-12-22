// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'

//action creators
export function addMovies(movies){
  return {
    type: ADD_MOVIES,
    movies: movies
  }
}

export function addFavorite(movie){
    return {
      type: ADD_FAVOURITE,
      movie: movie
    }
  }

  export function removeFromFavorite(movie){
    return {
      type: REMOVE_FROM_FAVOURITES,
      movie: movie
    }
  }

  export function setShowFavorite(val){
    return {
      type: SET_SHOW_FAVOURITES,
      val
    }
  }