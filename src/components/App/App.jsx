import React from 'react';
import { Routes, Route } from 'react-router-dom';

import classNames from 'classnames/bind';

import Login from '../../pages/Login/Login';
import Hotels from '../../pages/Hotels/Hotels';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
// import { useSelector, useDispatch } from 'react-redux';

import styles from './App.module.scss';

const cn = classNames.bind(styles);

function App() {
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state.count);

  return (
    <div className={cn('app')}>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/hotels'
          // element={ if not logined ? <Navigate to='/' replace /> : <BookPage />}
          element={<Hotels />}
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
