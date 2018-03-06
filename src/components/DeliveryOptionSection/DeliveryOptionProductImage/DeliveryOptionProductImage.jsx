import React from 'react';

function DeliveryOptionProductImage({imageList, key}){
  return (
    <img alt={imageList[0].imageType} src={imageList[0].imageUrl} id={`DeliveryOptionProductImage-${key}`}/>
  );
}

export default DeliveryOptionProductImage;
