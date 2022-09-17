function deleteFavouriteReducer(state, { payload }) {
  const favouriteHotelIds = state.favourites.ids.filter((id) => id !== payload);
  const favouriteHotels = state.favourites.items.filter((hotel) => favouriteHotelIds.includes(hotel.hotelId));

  return {
    ...state,
    favourites: {
      ids: favouriteHotelIds,
      items: favouriteHotels,
    },
  };
}

export default deleteFavouriteReducer;
