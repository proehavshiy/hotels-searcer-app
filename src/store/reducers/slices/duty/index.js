import { createSlice } from '@reduxjs/toolkit';

import setErrorReducer from './SetErrorReducer';
import setIsLoadingReducer from './SetIsLoadingReducer';

const initialState = {
  hotels: {
    error: null,
    isLoading: false,
  },
  images: {
    error: null,
    isLoading: false,
  },
  auth: {
    error: null,
    isLoading: false,
  },
};

const dutySlice = createSlice({
  name: 'duty',
  initialState,
  reducers: {
    setError: setErrorReducer,
    setIsLoading: setIsLoadingReducer,
  },
});

export const { setError, setIsLoading } = dutySlice.actions;
export default dutySlice.reducer;
