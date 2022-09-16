function setFetchedReducer(state, { payload }) {
  console.log('fetched payload:', payload);
  const favouritesIds = state.favourites.ids;
  const injectedWithFavoutiteLabelHotels = payload.map((hotel) => {
    if (favouritesIds.includes(hotel.id)) {
      hotel.isFavourite = true;
    } else {
      hotel.isFavourite = false;
    }
    return hotel;
  });
  console.log('injectedFetchedHotels:', injectedWithFavoutiteLabelHotels);

  return {
    ...state,
    fetched: injectedWithFavoutiteLabelHotels,
  };
}

export default setFetchedReducer;
