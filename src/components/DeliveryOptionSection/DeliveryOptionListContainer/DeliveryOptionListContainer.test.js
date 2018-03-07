import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DeliveryOptionListContainer from './DeliveryOptionListContainer';

function setup() {
  const props = {
    deliveryGroup: [{
      item: [{
        innerItem: "something"
      }]
    },{
      item: [{
        innerItem: "something"
      }]
    }]
  };

  const wrapper = mount(<DeliveryOptionListContainer deliveryGroup={props.deliveryGroup}/>);

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
    expect(wrapper.find('.DeliveryOptionListContainer').node.childNodes.length).toBe(2);
  });
});
