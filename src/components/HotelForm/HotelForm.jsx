import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../UI/Form/Form';
import FormFieldset from '../UI/FormFieldset/FormFieldset';

import { setSearchParams } from '../../store/reducers/slices/searchParams';

import { initFetchHotels } from '../../store/reducers/slices/hotels';

function HotelForm() {
  const dispatch = useDispatch();
  const { city, date, days } = useSelector((state) => state.searchParams);

  function handleChangeLocation(e) {
    dispatch(setSearchParams({ city: e.target.value }));
  }
  function handleChangeDate(e) {
    dispatch(setSearchParams({ date: new Date(e.target.value).getTime() }));
  }
  function handleChangeDys(e) {
    dispatch(setSearchParams({ days: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(initFetchHotels({ city, date, days }));
  }
  return (
    <Form
      submitCTA='Найти'
      isSubmitDisabled=''
      onSubmit={handleSubmit}
    >
      <FormFieldset
        labelPlaceholder='Локация'
        type='text'
        name='location'
        id='location'
        value={city}
        onChange={handleChangeLocation}
      />
      <FormFieldset
        labelPlaceholder='Дата заселения'
        type='date'
        name='date'
        id='date'
        value={new Date(date).toISOString().split('T')[0]}
        onChange={handleChangeDate}
      />
      <FormFieldset
        labelPlaceholder='Количество дней'
        type='days'
        name='days'
        id='days'
        value={days}
        onChange={handleChangeDys}
      />
    </Form>
  );
}

export default HotelForm;
