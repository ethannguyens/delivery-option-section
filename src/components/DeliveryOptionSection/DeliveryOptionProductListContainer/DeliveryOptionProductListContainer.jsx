import React from 'react';
import PropTypes from "prop-types";
import DeliveryOptionProductList from '../DeliveryOptionProductList/DeliveryOptionProductList';

require('./DeliveryOptionProductListContainer.scss');

function DeliveryOptionProductListContainer({deliveryOption}) {
  return(
    <div className="DeliveryOptionProductListContainer">
      {deliveryOption.deliveryGroups.map((deliveryGroup, groupIndex) => {
        return deliveryOption[`deliveryGroup-${groupIndex}`].basketItems.map((item, index) => {
          return (
            <DeliveryOptionProductList focusItem={deliveryOption.focusItem} key={index} item={item} index={index} groupIndex={groupIndex}/>
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
