import React from 'react';
import PropTypes from 'prop-types';

function DeliveryOptionProductImage({imageList, index}){
  return (
    <img alt={imageList[0].imageType} src={imageList[0].imageUrl} id={`DeliveryOptionProductImage-${index}`}/>
  );
}

DeliveryOptionProductImage.propTypes = {
  imageList: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};


export default DeliveryOptionProductImage;
