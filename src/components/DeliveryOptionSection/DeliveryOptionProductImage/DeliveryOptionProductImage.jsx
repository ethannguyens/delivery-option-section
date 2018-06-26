import React from 'react';
import PropTypes from 'prop-types';

require('./DeliveryOptionProductImage.scss');

function DeliveryOptionProductImage({groupIndex, openProductPreview, productImage, index, quantity}){
  return (
    <div onClick={openProductPreview && openProductPreview} id={`DeliveryOptionProductImage-${index}`} className="DeliveryOptionProductImage">
      <img className="DeliveryOptionProductImage-img" group-index={groupIndex} item-index={index} alt={productImage[0].imageType} src={`https://${productImage[0].imageUrl}`} />
      {quantity > 1 ? <span className="DeliveryOptionProductImage-quantity">x{quantity}</span> : ""}
    </div>
  );
}

DeliveryOptionProductImage.propTypes = {
  productImage: PropTypes.array.isRequired,
  openProductPreview: PropTypes.func,
  index: PropTypes.number.isRequired
};


export default DeliveryOptionProductImage;
