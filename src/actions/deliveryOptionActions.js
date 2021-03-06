import * as types from './actionTypes';
import DeliveryOptionApi from '../api/delivery-option-api';

export function updateSelectedOptionType(groupId, selectedOptionType) {
  const selectedOption = {
    groupId: groupId,
    selectedOptionType: selectedOptionType
  };

  return {type: types.UPDATE_SELECTED_OPTION_TYPE, selectedOption}
}

export function enableProductPreview(productPreview = true) {
  return {type: types.ENABLE_PRODUCT_PREVIEW, productPreview};
}

export function disableProductPreview(productPreview = false) {
  return {type: types.ENABLE_PRODUCT_PREVIEW, productPreview};
}

export function updateDeliveryOptionBasketItems(basketItems) {
  return {type: types.UPDATE_DELIVERY_OPTION_BASKET_ITEMS, basketItems};
}

export function updateDeliveryOptions(deliveryOptions) {
  return {type: types.UPDATE_DELIVERY_OPTIONS, deliveryOptions};
}

export function updateFocusItem(focusItem) {
  return {type: types.UPDATE_FOCUS_ITEM, focusItem};
}

export function updateDeliveryGroups(deliveryGroups, deliveryGroupsData) {
  let deliveryGroupsPayload = {
    deliveryGroups: deliveryGroups,
    deliveryGroupsData: deliveryGroupsData
  };
  return {type: types.UPDATE_DELIVERY_GROUPS, deliveryGroupsPayload}
}

export function getDeliveryOptions() {
  return dispatch => {
    DeliveryOptionApi.getDeliveryOption().then(({deliveryGroups, deliveryGroupsData}) => {
      dispatch(updateDeliveryGroups(deliveryGroups, deliveryGroupsData));
    });
  }

}


