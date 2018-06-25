/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import {saveState} from './store/localStorage';
import store from './store/store'
import App from './components/App.jsx';


// store.subscribe(() => {
//   saveState(store.getState());
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
