import { createSlice } from '@reduxjs/toolkit';

import manageLocalStorage from '../../../../utils/manageLocalStorage';

import isLoginedReducer from './setIsLoginedReducer';

// достаю из localStorage начальное значение доступа пользователя
const initialState = {
  isLogined: manageLocalStorage('hotels-app', 'get')?.isLogined || false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUserLogin: (state) => state,
    setIsLogined: isLoginedReducer,
  },
});

export const { initUserLogin, setIsLogined } = userSlice.actions;
export default userSlice.reducer;
