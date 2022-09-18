import {
  call, put, takeEvery, delay,
} from 'redux-saga/effects';

import { fetchHotels } from '../../api';
import { setError, setIsLoading } from '../reducers/slices/duty';

import { setFetchedHotels } from '../reducers/slices/hotels';

function* workerFetchHotels({ payload }) {
  const { city, date, days } = payload;

  try {
    // загрузка началась...
    yield put(setIsLoading(true));
    // вызов сайд-эффекта - запрос к серверу
    const hotels = yield call(fetchHotels, { city, date, days });
    // диспатч экшна с пейлоадом
    yield put(setFetchedHotels({ hotels, info: { city, date, days } }));
  } catch (error) {
    // диспатч ошибки
    yield put(setError(error.message));
  } finally {
    // загрузка завершилась
    yield put(setIsLoading(false));

    // сброс ошибки через 2 сек НО надо бы как-то это вызывать только в случае ошибки
    yield delay(2000);
    yield yield put(setError(null));
  }
}

export default function* watcherFetchHotels() {
  yield takeEvery('hotels/initFetchHotels', workerFetchHotels);
}
