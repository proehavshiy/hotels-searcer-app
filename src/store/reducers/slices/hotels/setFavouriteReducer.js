function setFavouriteReducer(state, { payload }) {
  const favouriteHotel = state.fetched.find((hotel) => hotel.id === payload);

  return {
    ...state,
    favourites: {
      ids: [...state.favourites.ids, payload],
      items: [...state.favourites.items, favouriteHotel],
    },
  };
}

export default setFavouriteReducer;
