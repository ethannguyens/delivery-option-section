import React from 'react';
import PropTypes from 'prop-types';

function DeliveryOptionList({index, item}) {
  console.log(arguments);
  return (
    <li id={`DeliveryOptionList-${index}`} className="DeliveryOptionList">
      <input type="radio" className="DeliveryOptionList-radio"/>
      <label htmlFor="" className="DeliveryOptionsList-label">
        <span className="DeliveryOptionList-type">{item.optionName}</span>
        <span className="DeliveryOptionList-info">{item.optionAdvice}</span>
        <p className="DeliveryOptionList-price">{item.optionDisplayPrice}</p>
        <p className="DeliveryOptionList-discountedPrice">{item.optionDiscountedPrice}</p>
      </label>
    </li>
  );
}


export default DeliveryOptionList;
