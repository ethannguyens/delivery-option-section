import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as deliveryOptionActions from '../../actions/deliveryOptionActions';

import DeliveryOptionGroupContainer from "./DeliveryOptionGroupContainer/DeliveryOptionGroupContainer";
import DeliveryOptionProductPreview from './DeliveryOptionProductPreview/DeliveryOptionProductPreview';


require('./DeliveryOptionSection.scss');

class DeliveryOptionSection extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.closeProductPreview = this.closeProductPreview.bind(this);

    this.productPreview = false;
  }

  closeProductPreview() {
    this.props.actions.disableProductPreview();
  }

  render() {
    return (
      <div className="DeliveryOptionSection">
        <h1 className="DeliveryOptionSection-header">Delivery Options</h1>
        {this.props.deliveryOption.deliveryGroups.map((group, index) => {
          return (
            <DeliveryOptionGroupContainer deliveryGroup={this.props.deliveryOption[`deliveryGroup-${group}`]} key={index}/>
          );
        })}
        {this.props.deliveryOption.productPreview && <DeliveryOptionProductPreview basketItems={this.props.deliveryOption.basketItems} closeProductPreview={this.closeProductPreview}/>}
      </div>
    );
  }
}


DeliveryOptionSection.propTypes = {
  deliveryOption: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    deliveryOption: state.deliveryOption,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deliveryOptionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOptionSection);
