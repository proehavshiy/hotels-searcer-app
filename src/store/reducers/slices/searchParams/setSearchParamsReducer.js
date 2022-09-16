function setSearchParamsReducer(state, { payload: { city, date, days } }) {
  return {
    ...state,
    city,
    date,
    days,
  };
}

export default setSearchParamsReducer;
