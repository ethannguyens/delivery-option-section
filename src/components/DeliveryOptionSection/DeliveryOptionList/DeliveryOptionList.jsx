import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

require('./DeliveryOptionList.scss');

function DeliveryOptionList({index, deliveryOption}) {
  return (
    <li id={`DeliveryOptionList-${index}`} className="DeliveryOptionList">
      <input type="radio" className="DeliveryOptionList-radio"/>
      <label htmlFor="" className="DeliveryOptionsList-label">
        <span className="DeliveryOptionList-type">{deliveryOption.optionName}</span>
        <span className="DeliveryOptionList-estimation" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(deliveryOption.optionEstimation)}} />
        {deliveryOption.optionAdvice.length > 6 ? <span className="DeliveryOptionList-info" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(deliveryOption.optionAdvice)}} /> : ""}
        <span className="DeliveryOptionList-price" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(deliveryOption.optionDisplayPrice)}} />
        <span className="DeliveryOptionList-discountedPrice" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(deliveryOption.optionDiscountedPrice)}} />
      </label>
    </li>
  );
}

DeliveryOptionList.propTypes = {
  index: PropTypes.number.isRequired,
  deliveryOption: PropTypes.object.isRequired
};


export default DeliveryOptionList;
