import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import App from './App';
import initialStates from '../reducers/initialState';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';


function setup() {
  const props = initialStates.instaFlickr;
  const createStore = (state = initialStates) => {
    const middleWares = [];
    const mockStore = configureStore(middleWares);
    return mockStore(state);
  };
  const store = createStore();
  const wrapper = mount(<Provider store={store}><App/></Provider>);
  return {
    props,
    wrapper
  };
}

describe('App', () => {
  it('should render itself', () => {
    // Arrange & Act
    const {wrapper} = setup();
    // Assert
    expect(wrapper.find('App').hasClass('App')).toBe(true);
  });
});
