function setFetchedReducer(state, { payload }) {
  // добавление данных запроса в каждый объект, чтобы каждый объект был независимым при рендеринге
  const injectedHotels = payload.hotels.map((hotel) => ({ ...hotel, info: payload.info }));
  return {
    ...state,
    fetched: {
      hotels: injectedHotels,
      info: payload.info,
    },

  };
}

export default setFetchedReducer;
