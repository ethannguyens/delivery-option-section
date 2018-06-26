import deliveryOptionData from './mockDeliveryOption';
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

// function extractDeliveryBasketItems(deliveryOptionData) {
//   let basketItems = [];
//   for (let deliveryGroupSet of deliveryOptionData.deliveryGroupSet) {
//     for (let deliveryGroup of deliveryGroupSet.deliveryGroups) {
//         basketItems = basketItems.concat(deliveryGroup.basketItems)
//     }
//   }
//   return basketItems;
// }

function extractDeliveryGroups(deliveryOptionData) {
  let deliveryGroups = [];
  let deliveryGroupsData = [];
  for (let deliveryGroupSet of deliveryOptionData.deliveryGroupSet) {
    for (let deliveryGroup of deliveryGroupSet.deliveryGroups) {
      deliveryGroups.push(deliveryGroup.groupId);
      let group = {
        selectedOptionType: deliveryGroup.selectedOptionType,
        deliveryOptions: deliveryGroup.deliveryOptions,
        basketItems: deliveryGroup.basketItems
      };
      deliveryGroupsData.push(group);
    }
  }
  return {deliveryGroups: deliveryGroups, deliveryGroupsData: deliveryGroupsData};
}



class DeliveryOptionApi {
  static getDeliveryOption() {
    return new Promise((resolve, reject) => {
      // const basketItems = extractDeliveryBasketItems(deliveryOptionData);
      const {deliveryGroups, deliveryGroupsData}= extractDeliveryGroups(deliveryOptionData);
      resolve({deliveryGroups: deliveryGroups, deliveryGroupsData: deliveryGroupsData});
    });
  }
}

export default DeliveryOptionApi;

