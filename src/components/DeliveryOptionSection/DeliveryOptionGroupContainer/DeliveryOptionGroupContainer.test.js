import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DeliveryOptionGroupContainer from "./DeliveryOptionGroupContainer";

function setup() {
  const props = {
    deliveryGroups: [{
      basketItems: [{
        productImage: [{
          imageType: "thumbnail",
          imageUrl: "image.jpg"
        }]
      }, {
        productImage: [{
          imageType: "thumbnail",
          imageUrl: "image.jpg"
        }]
      }],
      deliveryOptions: [{
        optionName: 'a',
        optionAdvice: 'b',
        optionDisplayPrice: 'c',
        optionDiscountedPrice: 'd'
      }]
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

  it('should render child components with correct props', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('DeliveryOptionProductImage').length).toBe(2);
    expect(wrapper.find('DeliveryOptionListContainer').length).toBe(1);
  });
});
