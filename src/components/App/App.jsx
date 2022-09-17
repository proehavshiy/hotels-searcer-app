/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-cond-assign */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  Routes, Route, Navigate, useNavigate, useLocation,
} from 'react-router-dom';

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
  const { isLogined } = useSelector((state) => state.user);

  const history = useNavigate();
  const currentPage = useLocation().pathname;

  useEffect(() => {
    if (currentPage === '/' && isLogined) {
      history('/hotels');
    }
  }, [history, isLogined, currentPage]);

  return (
    <div className={cn('app')}>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/hotels'
          element={isLogined ? <Hotels /> : <Navigate to='/' replace={true} />}
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
