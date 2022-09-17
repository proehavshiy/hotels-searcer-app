function setFetchedReducer(state, { payload }) {
  return {
    ...state,
    fetched: payload,
  };
}

export default setFetchedReducer;
