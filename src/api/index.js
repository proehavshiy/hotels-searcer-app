/* eslint-disable no-param-reassign */
import { URL } from '../constants';

export const fetchHotels = async ({
  city, date, days, limit = 10,
}) => {
  date = new Date(date);
  const checkInDate = date.toISOString().split('T')[0];
  const checkOudDate = new Date(date.setDate(date.getDate() + days)).toISOString().split('T')[0];

  const adress = `${URL}?location=${city}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOudDate}&limit=${limit}`;
  const response = await fetch(adress);
  const responseData = await response.json();

  return responseData;
};
