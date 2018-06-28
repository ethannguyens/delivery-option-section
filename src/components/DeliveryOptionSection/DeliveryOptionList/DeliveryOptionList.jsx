import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

require('./DeliveryOptionList.scss');

function DeliveryOptionList({index, groupId, deliveryOption, selectedOptionType}) {
  return (
    <li id={`DeliveryOptionList-${index}`} className="DeliveryOptionList">
      <input type="radio" id={`DeliveryOptionListOptionType--${deliveryOption.optionType}`} checked={selectedOptionType === deliveryOption.optionType} value={deliveryOption.optionType} group-id={groupId} className="DeliveryOptionList-radio"/>
      <label htmlFor={`DeliveryOptionListOptionType--${deliveryOption.optionType}`} className="DeliveryOptionsList-label">
        <span className="DeliveryOptionList-type">{deliveryOption.optionName}</span>
        <span className="DeliveryOptionList-price">
          <span className="DeliveryOptionList-originalPrice" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(deliveryOption.optionDisplayPrice)}} />
          <span className="DeliveryOptionList-discountedPrice" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(deliveryOption.optionDiscountedPrice)}} />
        </span>
        {/*<span className="DeliveryOptionList-estimation" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(deliveryOption.optionEstimation)}} />*/}
        {deliveryOption.optionAdvice.length > 6 && (selectedOptionType === deliveryOption.optionType) ? <span className="DeliveryOptionList-info" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(deliveryOption.optionAdvice)}} /> : ""}

      </label>
    </li>
  );
}

DeliveryOptionList.propTypes = {
  index: PropTypes.number.isRequired,
  groupId: PropTypes.number.isRequired,
  deliveryOption: PropTypes.object.isRequired,
  selectedOptionType: PropTypes.number.isRequired
};


export default DeliveryOptionList;
