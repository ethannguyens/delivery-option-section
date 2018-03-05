import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import DeliveryOptionSection from './components/DeliveryOptionSection/DeliveryOptionSection';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DeliveryOptionSection} />
  </Route>
);
