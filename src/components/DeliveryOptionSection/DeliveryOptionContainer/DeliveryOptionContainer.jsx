import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DeliveryOptionList from '../DeliveryOptionList/DeliveryOptionList';
import DeliveryOptions from '../../../api/mockDeliveryOption';


class DeliveryOptionContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.data = DeliveryOptions.deliveryGroupSet[0].deliveryGroups[0];
  }

  render() {
    return (
      <ul className="DeliveryOptionContainer">
        {this.data.deliveryOptions.map((item, index) => {
          return <DeliveryOptionList key={index} index={index} item={item}/>;
        })}
      </ul>)
  }
}

export default DeliveryOptionContainer;
