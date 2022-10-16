import { createSlice } from '@reduxjs/toolkit';

import setFetchedReducer from './setFetchedReducer';
import setFavouriteReducer from './setFavouriteReducer';
import deleteFavouriteReducer from './deleteFavouriteReducer';
import setFetchedImagesReducer from './setFetchedImagesReducer';

const initialState = {
  fetched: {
    hotels: [],
    info: { city: '', date: null, days: null },
  },
  favourites: [],
  images: [],
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    initFetchHotels: (state) => state,
    setFetchedHotels: setFetchedReducer,
    setFavouriteHotels: setFavouriteReducer,
    deleteFavouriteHotels: deleteFavouriteReducer,
    initFetchImages: (state) => state,
    setFetchedImages: setFetchedImagesReducer,
  },
});

export const {
  initFetchHotels, setFetchedHotels, setFavouriteHotels, deleteFavouriteHotels, initFetchImages, setFetchedImages,
} = hotelsSlice.actions;
export default hotelsSlice.reducer;
