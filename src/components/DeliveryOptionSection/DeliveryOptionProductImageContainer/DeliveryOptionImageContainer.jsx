import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionProductImage from '../DeliveryOptionProductImage/DeliveryOptionProductImage';

require('./DeliveryOptionProductImageContainer.scss');

function DeliveryOptionProductImageContainer({groupId, deliveryEstimation, basketItems, openProductPreview}) {
  return (
    <div className="DeliveryOptionProductImageContainer">
      {basketItems.map((item, index) => {
        if (index < 3 || (index === 3 && basketItems.length === 4)) { //only display 3 images
          return (
            <DeliveryOptionProductImage groupId={groupId} openProductPreview={openProductPreview} key={index} productImage={item.productImage} quantity={item.quantity}
                                        index={index}/>
          );
        } else if (index === 3 && basketItems.length > 4){
          return (<div className="DeliveryOptionProductImageContainer-lastImg" key={index} onClick={openProductPreview}>
            <DeliveryOptionProductImage groupId={groupId} key={index} productImage={item.productImage} quantity={item.quantity}
                                        index={index}/>
            <div className="DeliveryOptionProductImageContainer-lastImg-button">
                <span className="DeliveryOptionProductImageContainer-lastImg-button-num">
                  +{basketItems.length - 4}
                </span>
            </div>
          </div>)
        }
      })}
      <div className="DeliveryOptionProductImageContainer-deliveryEstimation">{deliveryEstimation}</div>
    </div>);
}

DeliveryOptionProductImageContainer.propTypes = {
  groupId: PropTypes.number.isRequired,
  deliveryEstimation: PropTypes.string,
  basketItems: PropTypes.array.isRequired,
  openProductPreview: PropTypes.func.isRequired
};

export default DeliveryOptionProductImageContainer;

