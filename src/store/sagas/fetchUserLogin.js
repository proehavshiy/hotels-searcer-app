import { put, takeEvery, delay } from 'redux-saga/effects';

import { setIsLogined } from '../reducers/slices/user';

// eslint-disable-next-line no-unused-vars
function* workerUserLogin({ payload }) {
  // payload - {login: Iemail; password: string}
  // в данном случае он не нужен, но в реальной задаче эти данные уходят на сервер
  try {
    // мок асинхронного запроса к серверу при логине
    yield delay(2000);
    // диспатч статуса логина - залогинен
    yield put(setIsLogined(true));
  } catch (error) {
    console.log('error', error);

    // диспатч статуса логина - незалогинен
    yield put(setIsLogined(false));
  }
}

export default function* watcherUserLogin() {
  yield takeEvery('user/initUserLogin', workerUserLogin);
}
