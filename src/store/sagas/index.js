import { call, all } from 'redux-saga/effects';

import watcherFetchHotels from './fetchHotelsSaga';
import watcherUserLogin from './fetchUserLogin';

export default function* rootSaga() {
  yield all([
    call(watcherFetchHotels),
    call(watcherUserLogin),
  ]);
}
