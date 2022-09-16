import { createSlice } from '@reduxjs/toolkit';

import setFetchedReducer from './setFetchedReducer';
import setFavouriteReducer from './setFavouriteReducer';

const initialState = {
  fetched: [],
  favourites: {
    ids: [],
    items: [],
  },
}

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setFetchedHotels: setFetchedReducer,
    setFavouriteHotels: setFavouriteReducer,
  },
});

export const { setFetchedHotels, setFavouriteHotels } = hotelsSlice.actions;
export default hotelsSlice.reducer;
