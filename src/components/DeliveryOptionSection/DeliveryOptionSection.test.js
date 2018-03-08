import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DeliveryOptionSection from "./DeliveryOptionSection";


function setup() {
  const props = {
    deliveryGroupSet: [{
      deliveryGroups: [{
        basketItems: [{
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
      }, {
          basketItems: [{
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
    }]
  };

  const wrapper = mount(<DeliveryOptionSection deliveryOptions={props}/>);

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

  it('should render child components correctly', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('DeliveryOptionGroupContainer').length).toBe(2);
  });
});
