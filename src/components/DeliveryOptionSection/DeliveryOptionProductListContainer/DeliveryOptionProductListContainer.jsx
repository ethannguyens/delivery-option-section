import React from 'react';
import PropTypes from "prop-types";
import DeliveryOptionProductList from '../DeliveryOptionProductList/DeliveryOptionProductList';

require('./DeliveryOptionProductListContainer.scss');

function DeliveryOptionProductListContainer({deliveryOption}) {
  return(
    <div className="DeliveryOptionProductListContainer">
      {deliveryOption.deliveryGroups.map((groupId) => {
        return deliveryOption[`deliveryGroup-${groupId}`].basketItems.map((item, index) => {
          return (
            <DeliveryOptionProductList focusItem={deliveryOption.focusItem} key={index} item={item} index={index} groupId={groupId}/>
          );
        });
      })
      }
    </div>
  );
}

DeliveryOptionProductListContainer.propTypes = {
  deliveryOption: PropTypes.object.isRequired
};

export default DeliveryOptionProductListContainer;
