import DeliveryOptionList from '../DeliveryOptionList/DeliveryOptionList';
import React from 'react';
import PropTypes from 'prop-types';

function DeliveryOptionListContainer({deliveryGroup}) {
  return (
    <div>
      <ul className="DeliveryOptionListContainer">
        {deliveryGroup.map((item, index) => {
          return <DeliveryOptionList key={index} index={index} item={item}/>;
        })}
      </ul>
    </div>);
}

DeliveryOptionListContainer.propTypes = {
  deliveryGroup: PropTypes.array.isRequired
};

export default DeliveryOptionListContainer;
