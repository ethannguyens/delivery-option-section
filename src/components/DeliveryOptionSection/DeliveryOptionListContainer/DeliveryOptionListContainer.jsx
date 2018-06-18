import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionList from '../DeliveryOptionList/DeliveryOptionList';

require('./DeliveryOptionListContainer.scss');

function DeliveryOptionListContainer({deliveryGroup, handleChange, selectedOptionType}) {
  return (
    <div className="DeliveryOptionListSection" onChange={handleChange}>
      <ul className="DeliveryOptionListContainer">
        {deliveryGroup.map((deliveryOption, index) => {
          return <DeliveryOptionList selectedOptionType={selectedOptionType} key={index} index={index} deliveryOption={deliveryOption}/>;
        })}
      </ul>
    </div>);
}

DeliveryOptionListContainer.propTypes = {
  deliveryGroup: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedOptionType: PropTypes.number.isRequired
};

export default DeliveryOptionListContainer;
