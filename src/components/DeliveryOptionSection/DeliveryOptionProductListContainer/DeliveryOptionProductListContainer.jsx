import React from 'react';
import PropTypes from "prop-types";
import DeliveryOptionProductList from '../DeliveryOptionProductList/DeliveryOptionProductList';

function DeliveryOptionProductListContainer({basketItems}) {
  return(
    <div className="DeliveryOptionProductListContainer">
      {basketItems.map((item, index) => {
          return (
            <DeliveryOptionProductList key={index} item={item} index={index}/>
          );
        })
      }
    </div>
  );
}

DeliveryOptionProductListContainer.propTypes = {
  basketItems: PropTypes.array.isRequired
};

export default DeliveryOptionProductListContainer;
