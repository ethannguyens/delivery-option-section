import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionListContainer from '../DeliveryOptionListContainer/DeliveryOptionListContainer';
import DeliveryOptionProductImage from '../DeliveryOptionProductImage/DeliveryOptionProductImage';

class DeliveryOptionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="DeliveryOptionGroupContainer">
        {this.props.deliveryGroup.basketItems.map((item, index) => {
          return (
            <DeliveryOptionProductImage key={index} imageList={item.productImage} index={index}/>
          );
        })}
        <DeliveryOptionListContainer deliveryGroup={this.props.deliveryGroup.deliveryOptions}/>
      </div>);
  }
}

DeliveryOptionGroupContainer.propTypes = {
  deliveryGroup: PropTypes.object.isRequired
};

export default DeliveryOptionGroupContainer;
