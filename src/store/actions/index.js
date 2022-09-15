import types from './types';

const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

// eslint-disable-next-line no-unused-vars
export const incrementAsync = (error) => ({
  type: types.INCREMENT_ASYNC,
});

export default increment;
