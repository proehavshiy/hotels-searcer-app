function setFavouriteReducer(state, { payload }) {
  return {
    ...state,
    favourites: [...state.favourites, payload],
  };
}

export default setFavouriteReducer;
