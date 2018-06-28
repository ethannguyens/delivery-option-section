import React from 'react';
import PropTypes from 'prop-types';
import DeliveryOptionProductImage from '../DeliveryOptionProductImage/DeliveryOptionProductImage';

require('./DeliveryOptionProductList.scss');

class DeliveryOptionProductList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (this.props.groupId === this.props.focusItem[0] && this.props.index === this.props.focusItem[1]) {
      this.element.scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }


  render() {
    return (
      <div id={`DeliveryOptionProductList-${this.props.index}`} group-id={this.props.groupId} className="DeliveryOptionProductList" ref={(el) => this.element = el}>
        <DeliveryOptionProductImage key={this.props.index} productImage={this.props.item.productImage} quantity={this.props.item.quantity}
                                    index={this.props.index}/>
        <p className="DeliveryOptionProductList-title">{this.props.item.productTitle}</p>
      </div>
    );
  }
}

DeliveryOptionProductList.propTypes = {
  item: PropTypes.object.isRequired,
  focusItem: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  groupId: PropTypes.number.isRequired
};

export default DeliveryOptionProductList;

