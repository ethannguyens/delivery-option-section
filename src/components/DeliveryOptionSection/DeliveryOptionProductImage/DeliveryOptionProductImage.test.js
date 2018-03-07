import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DeliveryOptionProductImage from './DeliveryOptionProductImage';

function setup() {
  const props = {
    index: 1,
    imageList: [{
      imageType: "img",
      imageUrl: "something.png"
    }]
  };

  const wrapper = mount(<DeliveryOptionProductImage imageList={props.imageList} index={props.index}/>);

  return {
    props,
    wrapper
  };
}

describe('DeliveryOptionProductImage', () => {
  it('should render itself', () => {
    //Arrange & Act
    const {wrapper} = setup();

    //Assert
    expect(wrapper.find('DeliveryOptionProductImage').hasClass('DeliveryOptionProductImage')).toBe(true);
  });

  it('should render with correct props', () => {
    //Arrange & Act
    const {props, wrapper} = setup();
    const DeliveryOptionProductImageComp = wrapper.find('DeliveryOptionProductImage');

    //Assert
    expect(DeliveryOptionProductImageComp.find('#DeliveryOptionProductImage-1').length).toBe(1);
    expect(DeliveryOptionProductImageComp.find('.DeliveryOptionProductImage').alt).toBe(props.imageList.imageType);
    expect(DeliveryOptionProductImageComp.find('.DeliveryOptionProductImage').src).toBe(props.imageList.imageUrl);
  });
});
