function setFetchedReducer(state, { payload }) {
  return {
    ...state,
    fetched: {
      hotels: payload.hotels,
      info: payload.info,
    },

  };
}

export default setFetchedReducer;
