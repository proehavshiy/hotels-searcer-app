import userReducer from './slices/user';
import searchParamsReducer from './slices/searchParams';
import hotelsReducer from './slices/hotels';
import dutyReducer from './slices/duty';

const rootReducer = {
  user: userReducer,
  searchParams: searchParamsReducer,
  hotels: hotelsReducer,
  duty: dutyReducer,
};

export default rootReducer;
