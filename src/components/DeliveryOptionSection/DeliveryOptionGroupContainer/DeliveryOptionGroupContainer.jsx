import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionListContainer from '../DeliveryOptionListContainer/DeliveryOptionListContainer';
import DeliveryOptionProductImageContainer from '../DeliveryOptionProductImageContainer/DeliveryOptionImageContainer';
import DeliveryOptionProductPreview from '../DeliveryOptionProductPreview/DeliveryOptionProductPreview';

require('./DeliveryOptionGroupContainer.scss');

class DeliveryOptionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.renderProductPreview = this.renderProductPreview.bind(this);
    this.closeProductPreview = this.closeProductPreview.bind(this);
    this.openProductPreview = this.openProductPreview.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      productPreview: false,
      selectedOptionType: 0
    };
  }

  handleChange(event) {
    this.setState(Object.assign({}, this.state, {selectedOptionType: Number(event.target.value)}));
  }

  closeProductPreview() {
    this.setState(Object.assign({}, this.state, {productPreview: false}))
  }

  openProductPreview() {
    this.setState(Object.assign({}, this.state, {productPreview: true}))
  }

  renderProductPreview() {
    return (
      <DeliveryOptionProductPreview closeProductPreview={this.closeProductPreview}
                                    basketItems={this.props.deliveryGroup.basketItems}/>
    );
  }

  render() {
    return (
      <div className="DeliveryOptionGroupContainer">
        <DeliveryOptionProductImageContainer basketItems={this.props.deliveryGroup.basketItems}
                                             openProductPreview={this.openProductPreview}/>
        <DeliveryOptionListContainer handleChange={this.handleChange}
                                     selectedOptionType={this.state.selectedOptionType}
                                     deliveryGroup={this.props.deliveryGroup.deliveryOptions}/>
        {this.state.productPreview && this.renderProductPreview()}
      </div>);
  }
}

DeliveryOptionGroupContainer.propTypes = {
  deliveryGroup: PropTypes.object.isRequired
};

export default DeliveryOptionGroupContainer;

