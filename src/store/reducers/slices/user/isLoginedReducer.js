import manageLocalStorage from '../../../../utils/manageLocalStorage';

function isLoginedReducer(state) {
  manageLocalStorage('hotels-isLogined', 'set', !state.isLogined);

  return {
    ...state,
    isLogined: !state.isLogined,
  };
}

export default isLoginedReducer;
