import React from 'react';


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


export default DeliveryOptionList;
