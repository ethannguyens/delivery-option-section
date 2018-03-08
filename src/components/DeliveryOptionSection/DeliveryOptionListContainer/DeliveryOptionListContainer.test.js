import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DeliveryOptionListContainer from './DeliveryOptionListContainer';

function setup() {
  const props = {
    deliveryGroups: [{
      deliveryOptions: [{
        optionName: 'a',
        optionAdvice: 'b',
        optionDisplayPrice: 'c',
        optionDiscountedPrice: 'd'
      }]
    }, {
      deliveryOptions: [{
        optionName: 'a',
        optionAdvice: 'b',
        optionDisplayPrice: 'c',
        optionDiscountedPrice: 'd'
      }]
    }]
  };

  const wrapper = mount(<DeliveryOptionListContainer deliveryGroup={props.deliveryGroups}/>);

  return {
    props,
    wrapper
  };
}


describe('DeliveryOptionListContainer', () => {
  it('should render itself', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('DeliveryOptionListContainer').hasClass('DeliveryOptionListSection')).toBe(true);
  });

  it('should render unordered list', () =>{
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('ul').hasClass('DeliveryOptionListContainer')).toBe(true);
  });

  it('should render list with correct props', () =>{
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('.DeliveryOptionListContainer').node.childElementCount).toBe(2);
  });
});
