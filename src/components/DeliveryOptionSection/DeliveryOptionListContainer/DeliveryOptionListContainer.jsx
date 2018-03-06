import DeliveryOptionList from '../DeliveryOptionList/DeliveryOptionList';
import React from 'react';

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

export default DeliveryOptionListContainer;
