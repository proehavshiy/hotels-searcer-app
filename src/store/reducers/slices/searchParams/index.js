import { createSlice } from '@reduxjs/toolkit';

import setSearchParamsReducer from './setSearchParamsReducer';

const searchParamsSlice = createSlice({
  name: 'user',
  initialState: {
    city: 'Москва',
    date: new Date(),
    days: 1,
  },
  reducers: {
    setSearchParams: setSearchParamsReducer,
  },
});

export const { setSearchParams } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
