import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DeliveryOptionSection from "./DeliveryOptionSection";


function setup() {
  const props = {
    deliveryGroupSet: [{
      deliveryGroups: [{}, {}]
    }]
  };

  const wrapper = mount(<DeliveryOptionSection props={props}/>);

  return {
    props,
    wrapper
  };
}


describe('DeliveryOptionSection', () => {
  it('should render itself', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('DeliveryOptionSection').hasClass('DeliveryOptionSection')).toBe(true);
  });

  it('should render header correctly', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('h1').hasClass('DeliveryOptionSection-header')).toBe(true);
  });

  it('should render components correctly', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('.DeliveryOptionSection').node.childNodes.length).toBe(3);
  });
});
