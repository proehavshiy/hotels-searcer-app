function setFavouriteReducer(state, { payload }) {
  const favouriteHotel = state.fetched.hotels.find((hotel) => hotel.hotelId === payload);

  return {
    ...state,
    favourites: {
      ids: [...state.favourites.ids, payload],
      items: [...state.favourites.items, favouriteHotel],
    },
  };
}

export default setFavouriteReducer;
