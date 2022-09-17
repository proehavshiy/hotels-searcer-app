import manageLocalStorage from '../../../../utils/manageLocalStorage';

function setIsLogined(state, { payload }) {
  manageLocalStorage('hotels-app', 'set', { isLogined: payload });

  return {
    ...state,
    isLogined: payload,
  };
}

export default setIsLogined;
