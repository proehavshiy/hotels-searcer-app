function deleteFavouriteReducer(state, { payload }) {
  const favouriteHotelIds = state.favourites.filter((id) => id !== payload);
  return {
    ...state,
    favourites: favouriteHotelIds,
  };
}

export default deleteFavouriteReducer;
