import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DeliveryOptionGroupContainer from "./DeliveryOptionGroupContainer";

function setup() {
  const props = {
    deliveryGroups: [{
      basketItems: [{
        productImage: [{}]
      }],
      deliveryOptions: [{}]
    }]
  };

  const wrapper = mount(<DeliveryOptionGroupContainer deliveryGroup={props.deliveryGroups[0]}/>);

  return {
    props,
    wrapper
  };
}


describe('DeliveryOptionGroupContainer', () => {
  it('should render itself', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('DeliveryOptionGroupContainer').hasClass('DeliveryOptionGroupContainer')).toBe(true);
  });

  it('should render components with correct props', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('.DeliveryOptionGroupContainer').node.childNodes.length).toBe(2);
  });
});


