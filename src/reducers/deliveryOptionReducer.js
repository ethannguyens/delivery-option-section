import * as types from '../actions/actionTypes';
import initialState from './deliveryOptionInitialState';



export default function deliveryOptionReducer(state = initialState.deliveryOption, action) {
  let newState;
  switch (action.type) {
    case types.UPDATE_SELECTED_OPTION_TYPE:
      newState = Object.assign({}, state);
      newState[`deliveryGroup-${action.selectedOption.groupId}`].selectedOptionType = action.selectedOption.selectedOptionType;
      return newState;

    case types.ENABLE_PRODUCT_PREVIEW:
      return Object.assign({}, state, {productPreview: action.productPreview});

    case types.DISABLE_PRODUCT_PREVIEW:
      return Object.assign({}, state, {productPreview: action.productPreview});

    case types.UPDATE_DELIVERY_OPTION_BASKET_ITEMS:
      return Object.assign({}, state, {basketItems: action.basketItems});

    case types.UPDATE_FOCUS_ITEM:
      return Object.assign({}, state, {focusItem: action.focusItem});

    case types.UPDATE_DELIVERY_GROUPS:
      newState = Object.assign({}, state);
      Object.assign(newState, {deliveryGroups: action.deliveryGroupsPayload.deliveryGroups});
      for (let i in action.deliveryGroupsPayload.deliveryGroupsData) {
        const deliveryGroup = {};
        deliveryGroup[`deliveryGroup-${i}`] = action.deliveryGroupsPayload.deliveryGroupsData[i];
        Object.assign(newState, deliveryGroup)
      }
      return newState;

    default:
      return state;
  }
}
