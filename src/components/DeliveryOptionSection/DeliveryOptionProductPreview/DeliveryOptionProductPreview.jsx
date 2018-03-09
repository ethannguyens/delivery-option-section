import React from 'react';
import PropTypes from "prop-types";

function DeliveryOptionProductPreview() {
  return(
    <div className="DeliveryOptionProductPreview">
      <div className="DeliveryOptionProductPreview-overlay">
        <div className="DeliveryOptionProductPreview-content">
          <div className="DeliveryOptionProductPreview-content-header">
            <div
              className="DeliveryOptionProductPreview-content-header-text">"Your Basket"</div>
            <span className="DeliveryOptionProductPreview-content-header-close"
                  onClick={console.log('click')}/>
          </div>
          <div className="DeliveryOptionProductPreview-content-body">

          </div>
          <div className="DeliveryOptionProductPreview-content-footer">
            button.
          </div>
        </div>
      </div>
    </div>
  )
}

DeliveryOptionProductPreview.propTypes = {
  deliveryGroup: PropTypes.array.isRequired
};

export default DeliveryOptionProductPreview;
