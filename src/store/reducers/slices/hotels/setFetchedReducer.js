function setFetchedReducer(state, { payload }) {
  const favouritesIds = state.favourites.ids;
  const injectedWithFavoutiteLabelHotels = payload.map((hotel) => {
    if (favouritesIds.includes(hotel.hotelId)) {
      hotel.isFavourite = true;
    } else {
      hotel.isFavourite = false;
    }
    return hotel;
  });

  return {
    ...state,
    fetched: injectedWithFavoutiteLabelHotels,
  };
}

export default setFetchedReducer;
