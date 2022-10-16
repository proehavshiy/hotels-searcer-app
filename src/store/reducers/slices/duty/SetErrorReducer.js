// payload: {type: 'hotels' | 'images' | auth, error: string | null}
const setErrorReducer = (state, { payload }) => {
  switch (payload.type) {
    case 'hotels':
      return {
        ...state,
        hotels: {
          ...state.hotels,
          error: payload.error,
        },
      };
    case 'images':
      return {
        ...state,
        images: {
          ...state.images,
          error: payload.error,
        },
      };
    case 'auth':
      return {
        ...state,
        auth: {
          ...state.auth,
          error: payload.error,
        },
      };
    default:
      return state;
  }
};

export default setErrorReducer;
