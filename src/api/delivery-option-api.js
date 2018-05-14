import deliveryOptions from './mockDeliveryOption';

class DeliveryOptionApi {
  static getDeliveryOption() {
    return new Promise((resolve, reject) => {
      resolve(deliveryOptions);
    });
  }
}

export default DeliveryOptionApi;

