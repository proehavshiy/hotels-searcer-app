// payload: {type: 'hotels' | 'images', isLoading: bool}
const setIsLoadingReducer = (state, { payload }) => {
  switch (payload.type) {
    case 'hotels':
      return {
        ...state,
        hotels: {
          ...state.hotels,
          isLoading: payload.isLoading,
        },
      };
    case 'images':
      return {
        ...state,
        images: {
          ...state.images,
          isLoading: payload.isLoading,
        },
      };
    case 'auth':
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: payload.isLoading,
        },
      };
    default:
      return state;
  }
};

export default setIsLoadingReducer;
