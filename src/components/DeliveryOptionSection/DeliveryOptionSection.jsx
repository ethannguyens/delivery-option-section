import React from 'react';
import DeliveryOptionGroupContainer from "./DeliveryOptionGroupContainer/DeliveryOptionGroupContainer";
import PropTypes from "prop-types";

class DeliveryOptionSection extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.data = props.deliveryOptions.deliveryGroupSet[0];
  }

  render() {
    return (
      <div className="DeliveryOptionSection">
        <h1 className="DeliveryOptionSection-header">Delivery Options</h1>
        {this.data.deliveryGroups.map((group, index) => {
          return (
            <DeliveryOptionGroupContainer deliveryGroup={group} key={index}/>
          );
        })}
      </div>
    );
  }
}


DeliveryOptionSection.propTypes = {
  deliveryOptions: PropTypes.object.isRequired
};


export default DeliveryOptionSection;
