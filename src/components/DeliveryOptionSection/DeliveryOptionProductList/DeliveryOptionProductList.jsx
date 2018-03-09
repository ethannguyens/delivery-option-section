import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionProductImage from '../DeliveryOptionProductImage/DeliveryOptionProductImage';

function DeliveryOptionProductList({item, index}) {
  return (
    <div className="DeliveryOptionProductList">
      <DeliveryOptionProductImage productImage={item.productImage} index={index} iquantity={item.quantity}/>
      <p className="DeliveryOptionProductList-title">{item.productTitle}</p>
    </div>
  );
}


DeliveryOptionProductList.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default DeliveryOptionProductList;

