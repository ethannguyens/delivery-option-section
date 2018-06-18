import React from 'react';
import PropTypes from "prop-types";
import DeliveryOptionProductListContainer from '../DeliveryOptionProductListContainer/DeliveryOptionProductListContainer';
import DeliveryOptionProductClose from './DeliveryOptionProductClose.svg';

require('./DeliveryOptionProductPreview.scss');

//Testing purposes. Need to remove before production
window.siteObj = {
  siteHomePage: "https://www.myprotein.com/"
};

function DeliveryOptionProductPreview({basketItems, closeProductPreview}) {
  return(
    <div className="DeliveryOptionProductPreview">
      <div className="DeliveryOptionProductPreview-overlay">
        <div className="DeliveryOptionProductPreview-content">
          <div className="DeliveryOptionProductPreview-content-header">
            <div
              className="DeliveryOptionProductPreview-content-header-text">Your Items</div>
            <img src={DeliveryOptionProductClose} className="DeliveryOptionProductPreview-content-header-close"
                  onClick={closeProductPreview}/>
          </div>
          <div className="DeliveryOptionProductPreview-content-body">
            <DeliveryOptionProductListContainer basketItems={basketItems}/>
          </div>
          <div className="DeliveryOptionProductPreview-content-footer">
            <button className="DeliveryOptionProductPreview-content-footer-return" onClick={closeProductPreview}>Return To Checkout</button>
            {window.siteObj ? <a href={`${window.siteObj.siteHomePage}my.basket`} className="DeliveryOptionProductPreview-content-footer-basket">Edit My Basket</a> : ""}
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
