import React from 'react';
import PropTypes from 'prop-types';

require('./DeliveryOptionProductImage.scss');

function DeliveryOptionProductImage({productImage, index, quantity}){
  return (
    <div id={`DeliveryOptionProductImage-${index}`} className="DeliveryOptionProductImage">
      <img className="DeliveryOptionProductImage-img" alt={productImage[0].imageType} src={`https://${productImage[0].imageUrl}`} />
      {quantity > 1 ? <span className="DeliveryOptionProductImage-quantity">x{quantity}</span> : ""}
    </div>
  );
}

DeliveryOptionProductImage.propTypes = {
  productImage: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};


export default DeliveryOptionProductImage;
