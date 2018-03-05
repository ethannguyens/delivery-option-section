import React from 'react';
import DeliveryOptionList from '../DeliveryOptionList/DeliveryOptionList';


class DeliveryOptionListContainer extends React.Component {

  render() {
    return (
      <div>
        <ul className="DeliveryOptionListContainer">
          {this.props.deliveryGroup.map((item, index) => {
            return <DeliveryOptionList key={index} index={index} item={item}/>;
          })}
        </ul>
      </div>);
  }
}

export default DeliveryOptionListContainer;
