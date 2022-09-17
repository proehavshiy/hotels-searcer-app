import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  isLoading: false,
};

const dutySlice = createSlice({
  name: 'duty',
  initialState,
  reducers: {
    setError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    setIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
  },
});

export const { setError, setIsLoading } = dutySlice.actions;
export default dutySlice.reducer;
