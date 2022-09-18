function setSearchParamsReducer(state, { payload: { city = state.city, date = state.date, days = state.days } }) {
  return {
    ...state,
    city,
    date,
    days,
  };
}

export default setSearchParamsReducer;
