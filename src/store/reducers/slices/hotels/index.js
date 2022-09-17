import { createSlice } from '@reduxjs/toolkit';

import setFetchedReducer from './setFetchedReducer';
import setFavouriteReducer from './setFavouriteReducer';
import deleteFavouriteReducer from './deleteFavouriteReducer';

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
    initFetchHotels: (state) => state,
    setFetchedHotels: setFetchedReducer,
    setFavouriteHotels: setFavouriteReducer,
    deleteFavouriteHotels: deleteFavouriteReducer,
  },
});

export const {
  initFetchHotels, setFetchedHotels, setFavouriteHotels, deleteFavouriteHotels,
} = hotelsSlice.actions;
export default hotelsSlice.reducer;
