import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchHotels } from '../../api';

import { setFetchedHotels } from '../reducers/slices/hotels';

function* workerFetchHotels({ payload }) {
  const { city, date, days } = payload;

  try {
    // вызов сайд-эффекта - запрос к серверу
    const hotels = yield call(fetchHotels, { city, date, days });
    // диспатч экшна с пейлоадом
    yield put(setFetchedHotels(hotels));
  } catch (error) {
    console.log('error', error);
  }
}

export default function* watcherFetchHotels() {
  yield takeEvery('hotels/initFetchHotels', workerFetchHotels);
}
