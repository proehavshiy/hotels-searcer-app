/* eslint-disable no-param-reassign */
import { URL } from '../constants';

export const fetchHotels = async ({
  city, date, days, limit = 10,
}) => {
  date = new Date(date);
  const checkInDate = date.toISOString().split('T')[0];
  console.log('days:', days);
  console.log('date.getDate():', date.getDate());
  console.log('date.getDate() + days:', date.getDate() + days);
  const checkOudDate = new Date(date.setDate(date.getDate() + days)).toISOString().split('T')[0];
  console.log('checkOudDate:', checkOudDate);

  const adress = `${URL}?location=${city}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOudDate}&limit=${limit}`;
  console.log('adress:', adress);
  const response = await fetch(adress);
  const responseData = await response.json();

  return responseData;
};
