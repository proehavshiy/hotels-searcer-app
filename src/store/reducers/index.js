import userReducer from './slices/user';
import searchParamsReducer from './slices/searchParams';
import hotelsReducer from './slices/hotels';

const rootReducer = {
  user: userReducer,
  searchParams: searchParamsReducer,
  hotels: hotelsReducer,
};

export default rootReducer;
