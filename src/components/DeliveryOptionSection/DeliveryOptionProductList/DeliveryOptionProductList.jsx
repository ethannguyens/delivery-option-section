import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionProductImage from '../DeliveryOptionProductImage/DeliveryOptionProductImage';

require('./DeliveryOptionProductList.scss');

function DeliveryOptionProductList({item, index}) {
  return (
    <div className="DeliveryOptionProductList">
      <DeliveryOptionProductImage key={index} productImage={item.productImage} quantity={item.quantity}
                                  index={index}/>
      <p className="DeliveryOptionProductList-title">{item.productTitle}</p>
    </div>
  );
}


DeliveryOptionProductList.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default DeliveryOptionProductList;

