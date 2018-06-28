import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionList from '../DeliveryOptionList/DeliveryOptionList';

require('./DeliveryOptionListContainer.scss');

function DeliveryOptionListContainer({groupId, deliveryOptions, handleChange, selectedOptionType}) {
  return (
    <div className="DeliveryOptionListSection" onChange={handleChange}>
      <ul className="DeliveryOptionListContainer">
        {deliveryOptions.map((deliveryOption, index) => {
          return <DeliveryOptionList groupId={groupId} selectedOptionType={selectedOptionType} key={index} index={index} deliveryOption={deliveryOption}/>;
        })}
      </ul>
    </div>);
}

DeliveryOptionListContainer.propTypes = {
  deliveryOptions: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedOptionType: PropTypes.number.isRequired,
  groupId: PropTypes.number.isRequired
};

export default DeliveryOptionListContainer;
