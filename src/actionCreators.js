import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOMDBData (imdbId, omdbData) {
  return { type: ADD_OMDB_DATA, imdbId, omdbData}
}
