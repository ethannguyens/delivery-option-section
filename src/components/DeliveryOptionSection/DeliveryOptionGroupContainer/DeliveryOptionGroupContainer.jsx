import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as deliveryOptionAction from '../../../actions/deliveryOptionActions';


import DeliveryOptionListContainer from '../DeliveryOptionListContainer/DeliveryOptionListContainer';
import DeliveryOptionProductImageContainer from '../DeliveryOptionProductImageContainer/DeliveryOptionImageContainer';

require('./DeliveryOptionGroupContainer.scss');

class DeliveryOptionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.openProductPreview = this.openProductPreview.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.actions.updateSelectedOptionType(event.target.value);
  }

  openProductPreview(event) {
    this.props.actions.updateFocusItem([Number(event.target.getAttribute('group-index')), Number(event.target.getAttribute('item-index'))]);
    this.props.actions.enableProductPreview();
  }

  render() {
    return (
      <div className="DeliveryOptionGroupContainer">
        <DeliveryOptionProductImageContainer groupIndex={this.props.groupIndex} basketItems={this.props.deliveryGroup.basketItems}
                                             openProductPreview={this.openProductPreview}/>
        <DeliveryOptionListContainer handleChange={this.handleChange}
                                     selectedOptionType={Number(this.props.deliveryOption.selectedOptionType)}
                                     deliveryGroup={this.props.deliveryGroup.deliveryOptions}/>
      </div>);
  }
}

DeliveryOptionGroupContainer.propTypes = {
  deliveryGroup: PropTypes.object.isRequired,
  groupIndex: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    deliveryOption: state.deliveryOption
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deliveryOptionAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOptionGroupContainer);

