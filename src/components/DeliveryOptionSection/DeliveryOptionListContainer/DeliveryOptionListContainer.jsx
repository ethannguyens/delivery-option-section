import DeliveryOptionList from '../DeliveryOptionList/DeliveryOptionList';
import React from 'react';
import PropTypes from 'prop-types';

require('./DeliveryOptionListContainer.scss');

function DeliveryOptionListContainer({deliveryGroup}) {
  return (
    <div className="DeliveryOptionListSection">
      <ul className="DeliveryOptionListContainer">
        {deliveryGroup.map((deliveryOption, index) => {
          return <DeliveryOptionList key={index} index={index} deliveryOption={deliveryOption}/>;
        })}
      </ul>
    </div>);
}

DeliveryOptionListContainer.propTypes = {
  deliveryGroup: PropTypes.array.isRequired
};

export default DeliveryOptionListContainer;
