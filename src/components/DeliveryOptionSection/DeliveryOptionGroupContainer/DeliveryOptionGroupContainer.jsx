import React from 'react';
import DeliveryOptionListContainer from '../DeliveryOptionListContainer/DeliveryOptionListContainer';
import DeliveryOptionProductImage from '../DeliveryOptionProductImage/DeliveryOptionProductImage';

class DeliveryOptionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="DeliveryOptionGroupContainer">
        <a>
          {this.props.deliveryGroup.basketItems.map((item, index) => {
            return (
              <DeliveryOptionProductImage imageList={item.productImage} key={index}/>
            );
          })}
        </a>
        <DeliveryOptionListContainer deliveryGroup={this.props.deliveryGroup.deliveryOptions} />
      </div>);
  }
}

export default DeliveryOptionGroupContainer;
