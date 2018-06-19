import deliveryOptions from './mockDeliveryOption';
import * as deliveryOptionAction from '../actions/deliveryOptionActions';


const selectedDeliveryOptionEndPoint = "/checkout-api/v2/selected-delivery-option";

const options = [{
    'selectedDeliveryOptionType' : "",
    'selectedDeliveryGroup' : ""
  }];

const deliveryGroupSelections = {
  "groups" : options
};


function submitSelectedDeliveryOption(data) {

}

function updateStoreBasketItems(deliveryOptionData) {
  let basketItems = [];
  for (let deliveryGroupSet of deliveryOptionData.deliveryGroupSet) {
    for (let deliveryGroup of deliveryGroupSet) {
      for (let basketItems of deliveryGroup) {
        basketItems = basketItems.concat(basketItems)
      }
    }
  }
  console.log(basketItems);
}

class DeliveryOptionApi {
  static getDeliveryOption() {
    return new Promise((resolve, reject) => {
      resolve(deliveryOptions);
    });
  }
}

DeliveryOptionApi.getDeliveryOption().then(datta => console.log(data));


export default DeliveryOptionApi;

