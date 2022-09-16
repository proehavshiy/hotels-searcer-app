import { createSlice } from '@reduxjs/toolkit';

import manageLocalStorage from '../../../../utils/manageLocalStorage';

import isLoginedReducer from './isLoginedReducer';

const initialState = {
  isLogined: manageLocalStorage('hotels-isLogined', 'get') || false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleIsLogined: isLoginedReducer,
  },
});

export const { toggleIsLogined } = userSlice.actions;
export default userSlice.reducer;
