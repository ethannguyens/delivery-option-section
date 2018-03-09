import React from 'react';
import PropTypes from "prop-types";
import DeliveryOptionProductListContainer from '../DeliveryOptionProductListContainer/DeliveryOptionProductListContainer'

function DeliveryOptionProductPreview({basketItems, closeProductPreview}) {
  return(
    <div className="DeliveryOptionProductPreview">
      <div className="DeliveryOptionProductPreview-overlay">
        <div className="DeliveryOptionProductPreview-content">
          <div className="DeliveryOptionProductPreview-content-header">
            <div
              className="DeliveryOptionProductPreview-content-header-text">"Your Basket"</div>
            <span className="DeliveryOptionProductPreview-content-header-close"
                  onClick={close}/>
          </div>
          <div className="DeliveryOptionProductPreview-content-body">
            <DeliveryOptionProductListContainer basketItems={basketItems}/>
          </div>
          <div className="DeliveryOptionProductPreview-content-footer">
            <button className="DeliveryOptionProductPreview-content-footer-return" onClick={closeProductPreview}>Return To Checkout</button>
            <a href="" className="DeliveryOptionProductPreview-content-footer-basket">Edit My Basket</a>
          </div>
        </div>
      </div>
    </div>
  )
}

DeliveryOptionProductPreview.propTypes = {
  basketItems: PropTypes.array.isRequired,
  closeProductPreview: PropTypes.func.isRequired
};

export default DeliveryOptionProductPreview;
