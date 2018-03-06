import React from 'react';
import PropTypes from 'prop-types';

function DeliveryOptionList({index, item}) {
  return (
    <li id={`DeliveryOptionList-${index}`} className="DeliveryOptionList">
      <input type="radio" className="DeliveryOptionList-radio"/>
      <label htmlFor="" className="DeliveryOptionsList-label">
        <span className="DeliveryOptionList-type">{item.optionName}</span>
        <span className="DeliveryOptionList-info">{item.optionAdvice}</span>
        <span className="DeliveryOptionList-price">{item.optionDisplayPrice}</span>
        <span className="DeliveryOptionList-discountedPrice">{item.optionDiscountedPrice}</span>
      </label>
    </li>
  );
}

DeliveryOptionList.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
};


export default DeliveryOptionList;
