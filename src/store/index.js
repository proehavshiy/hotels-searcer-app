/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
// import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootSaga from './sagas';

// export default function configureStore(initialState) {
//   const sagaMiddleware = createSagaMiddleware();
//   const middlewares = [sagaMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);

//   const store = createStore(rootReducer, initialState, composedEnhancers);

//   sagaMiddleware.run(rootSaga);
//   return store;
// }

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './reducers';

const saga = createSagaMiddleware();

const preloadedState = {
  searchParams: {
    city: 'Москва',
    date: new Date(),
    days: 1,
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
  preloadedState,
});

export default store;
