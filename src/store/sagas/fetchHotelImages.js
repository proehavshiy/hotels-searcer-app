import {
  put, takeEvery, call, delay,
} from 'redux-saga/effects';

import { fetchImages } from '../../api';

import { setError, setIsLoading } from '../reducers/slices/duty';
import { setFetchedImages } from '../reducers/slices/hotels';

function* workerHotelImages({ payload }) {
  try {
    // загрузка началась...
    yield put(setIsLoading(true));
    // запрос на сервер за картинками
    const images = yield call(fetchImages, { searchParam: payload });
    // если сервер вернул ошибку
    if (images.status === 'error') throw new Error(images.message);
    // диспатч полученных от сервера картинок
    yield put(setFetchedImages(images));
  } catch (error) {
    // диспатч ошибки
    yield put(setError(error.message));
  } finally {
    yield delay(2000);
    yield yield put(setError(null));
  }
}

export default function* watcherHotelImages() {
  yield takeEvery('hotels/initFetchImages', workerHotelImages);
}
