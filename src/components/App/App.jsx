import React from 'react';
import { Routes, Route } from 'react-router-dom';

import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';

import Login from '../../pages/Login/Login';
import Hotels from '../../pages/Hotels/Hotels';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';

import Modal from '../UI/Modal/Modal';

// import { setError } from '../../store/reducers/slices/duty';

import styles from './App.module.scss';

const cn = classNames.bind(styles);

function App() {
  // const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.duty);

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
      <Modal
        isOpen={isLoading}
      >
        <LoadingSpinner />
      </Modal>
      <Modal
        isOpen={error}
      >
        <div>{error}</div>
      </Modal>
    </div>
  );
}

export default App;
