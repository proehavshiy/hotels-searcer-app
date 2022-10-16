import {
  call, put, takeEvery,
} from 'redux-saga/effects';

import { fetchHotels } from '../../api';
import { setError, setIsLoading } from '../reducers/slices/duty';

import { setFetchedHotels } from '../reducers/slices/hotels';

function* workerFetchHotels({ payload }) {
  const { city, date, days } = payload;

  try {
    // загрузка началась...
    yield put(setIsLoading({ type: 'hotels', isLoading: true }));
    // вызов сайд-эффекта - запрос к серверу
    const hotels = yield call(fetchHotels, { city, date, days });
    // если сервер вернул ошибку
    if (hotels.status === 'error') throw new Error(hotels.message);
    // диспатч экшна с пейлоадом
    yield put(setFetchedHotels({ hotels, info: { city, date, days } }));
  } catch (error) {
    // диспатч ошибки
    yield put(setError({ type: 'hotels', error: error.message }));
  } finally {
    // загрузка завершилась
    yield put(setIsLoading({ type: 'hotels', isLoading: false }));
  }
}

export default function* watcherFetchHotels() {
  yield takeEvery('hotels/initFetchHotels', workerFetchHotels);
}
