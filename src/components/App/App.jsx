import React, { useEffect } from 'react';
import {
  Routes, Route, Navigate, useNavigate, useLocation,
} from 'react-router-dom';

import classNames from 'classnames/bind';

import { useSelector, useDispatch } from 'react-redux';

import Login from '../../pages/Login/Login';
import Hotels from '../../pages/Hotels/Hotels';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';

import Modal from '../UI/Modal/Modal';

import DataPlaceholder from '../UI/DataPlaceholder/DataPlaceholder';

import { setError } from '../../store/reducers/slices/duty';

import styles from './App.module.scss';

const cn = classNames.bind(styles);

function App() {
  const dispatch = useDispatch();
  const { isLoading: hotelsIsLoading, error: hotelsError } = useSelector((state) => state.duty.hotels);
  const { isLoading: authIsLoading, error: authError } = useSelector((state) => state.duty.auth);

  const { isLogined } = useSelector((state) => state.user);

  function handleFetchError() {
    if (hotelsError) dispatch(setError({ type: 'hotels', error: null }));
    if (authError) dispatch(setError({ type: 'auth', error: null }));
  }

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
          element={isLogined ? <Hotels /> : <Navigate to='/' replace />}
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
      <Modal
        isOpen={hotelsIsLoading || authIsLoading}
      >
        <LoadingSpinner />
      </Modal>
      <Modal
        isOpen={hotelsError || authError}
        type='error'
        handleClick={handleFetchError}
      >
        <DataPlaceholder>Не&nbsp; удалось загрузить данные. Попробуйте снова</DataPlaceholder>
      </Modal>
    </div>
  );
}

export default App;
