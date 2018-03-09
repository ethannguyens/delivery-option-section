import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionListContainer from '../DeliveryOptionListContainer/DeliveryOptionListContainer';
import DeliveryOptionProductImageContainer from '../DeliveryOptionProductImageContainer/DeliveryOptionImageContainer';

require('./DeliveryOptionGroupContainer.scss');

class DeliveryOptionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="DeliveryOptionGroupContainer">
        <DeliveryOptionProductImageContainer basketItems={this.props.deliveryGroup.basketItems}/>
        <DeliveryOptionListContainer deliveryGroup={this.props.deliveryGroup.deliveryOptions}/>
      </div>);
  }
}

DeliveryOptionGroupContainer.propTypes = {
  deliveryGroup: PropTypes.object.isRequired
};

export default DeliveryOptionGroupContainer;

