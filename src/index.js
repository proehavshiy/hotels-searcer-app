import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import App from './components/App/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router basename='/'>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
