import {
  put, takeEvery, call,
} from 'redux-saga/effects';

import { fetchLogin } from '../../api';

import { setError, setIsLoading } from '../reducers/slices/duty';

import { setIsLogined } from '../reducers/slices/user';

// payload - {login: Iemail; password: string}
function* workerUserLogin({ payload }) {
  // в данном случае он не нужен, но в реальной задаче эти данные уходят на сервер
  try {
    // загрузка началась...
    yield put(setIsLoading({ type: 'auth', isLoading: true }));
    // запрос к серверу при логине
    const loginResponse = yield call(fetchLogin, { loginParams: payload });
    // если сервер вернул ошибку
    if (loginResponse.status === 'error') throw new Error(loginResponse.message);
    // диспатч статуса логина - залогинен
    yield put(setIsLogined(loginResponse.isLogined));
  } catch (error) {
    // диспатч статуса логина - незалогинен
    yield put(setIsLogined(false));
    // диспатч ошибки
    yield put(setError({ type: 'auth', error: error.message }));
  } finally {
    // загрузка завершилась
    yield put(setIsLoading({ type: 'auth', isLoading: false }));
  }
}

export default function* watcherUserLogin() {
  yield takeEvery('user/initUserLogin', workerUserLogin);
}
