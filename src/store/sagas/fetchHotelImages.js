import {
  put, takeEvery, delay,
} from 'redux-saga/effects';

import { SLIDER_IMAGES } from '../../constants';

import { setError, setIsLoading } from '../reducers/slices/duty';
import { setFetchedImages } from '../reducers/slices/hotels';

// eslint-disable-next-line no-unused-vars
function* workerHotelImages({ payload }) {
  // в данном случае он не нужен, но в реальной задаче я бы получал картинки с сервера по поисковому слову, например
  try {
    // загрузка началась...
    yield put(setIsLoading(true));
    // мок асинхронного запроса к серверу
    yield delay(2000);
    // диспатч полученных от сервера картинок
    yield put(setFetchedImages(SLIDER_IMAGES));
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
