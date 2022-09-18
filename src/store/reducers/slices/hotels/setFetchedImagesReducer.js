function setFetchedImagesReducer(state, { payload }) {
  return {
    ...state,
    images: payload,
  };
}

export default setFetchedImagesReducer;
