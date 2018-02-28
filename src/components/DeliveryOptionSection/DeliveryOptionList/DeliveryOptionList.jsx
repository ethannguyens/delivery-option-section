import React from 'react';

function DeliveryOptionList(deliveryType, deliveryDate, deliveryDescription, deliveryPrice) {
  return (
    <li className="DeliveryOptionList">
      <input type="radio" className="DeliveryOptionList-radio"/>
      <label htmlFor="" className="DeliveryOptionsList-label">
        <span className="DeliveryOptionList-type">{deliveryType}</span>
        <span className="DeliveryOptionList-date"></span>
        <span className="DeliveryOptionList-info"></span>
        <span className="DeliveryOptionList-price">{deliveryPrice}</span>
      </label>
    </li>
  );
}

export default DeliveryOptionList;
