import { createSlice } from '@reduxjs/toolkit';

import setFetchedReducer from './setFetchedReducer';
import setFavouriteReducer from './setFavouriteReducer';

const initialState = {
  fetched: [],
  favourites: {
    ids: [],
    items: [],
  },
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    initFetchHotels: (state, payload) => payload,
    setFetchedHotels: setFetchedReducer,
    setFavouriteHotels: setFavouriteReducer,
  },
});

export const { initFetchHotels, setFetchedHotels, setFavouriteHotels } = hotelsSlice.actions;
export default hotelsSlice.reducer;
