import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DeliveryOptionList from './DeliveryOptionList';

function setup() {
  const props = {
    index: 1,
    item: {
      optionName: 'a',
      optionAdvice: 'b',
      optionDisplayPrice: 'c',
      optionDiscountedPrice: 'd'
    }
  };

  const wrapper = mount(<DeliveryOptionList item={props.item} index={props.index}/>);

  return {
    props,
    wrapper
  };
}


describe('DeliveryOptionList', () => {
  it('should render itself', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('DeliveryOptionList').hasClass('DeliveryOptionList')).toBe(true);
  });

  it('should render with correct props', () => {
    //Arrange & Act
    const {props, wrapper} = setup();
    const DeliveryOptionListComp = wrapper.find('DeliveryOptionList');

    //Assert
    expect(DeliveryOptionListComp.find('#DeliveryOptionList-1').length).toBe(1);
    expect(DeliveryOptionListComp.find('.DeliveryOptionList-type').node.innerHTML).toBe(props.item.optionName);
    expect(DeliveryOptionListComp.find('.DeliveryOptionList-info').node.innerHTML).toBe(props.item.optionAdvice);
    expect(DeliveryOptionListComp.find('.DeliveryOptionList-price').node.innerHTML).toBe(props.item.optionDisplayPrice);
    expect(DeliveryOptionListComp.find('.DeliveryOptionList-discountedPrice').node.innerHTML).toBe(props.item.optionDiscountedPrice);
  });
});
