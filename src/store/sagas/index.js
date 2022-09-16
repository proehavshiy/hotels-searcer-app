// import {
//   all, call, delay, put, takeEvery,
// } from 'redux-saga/effects';

// export function* incrementAsync() {
//   yield delay(1000);
//   yield put({ type: 'INCREMENT' });
// }

// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync);
// }

// // single entry point to start all Sagas at once
// export default function* rootSaga() {
//   yield all([
//     call(watchIncrementAsync),
//   ]);
// }

import {
  call, put, takeEvery, all,
} from 'redux-saga/effects';

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

function* watcherFetchHotels() {
  yield takeEvery('hotels/initFetchHotels', workerFetchHotels);
}

export default function* rootSaga() {
  yield all([
    call(watcherFetchHotels),
  ]);
}
