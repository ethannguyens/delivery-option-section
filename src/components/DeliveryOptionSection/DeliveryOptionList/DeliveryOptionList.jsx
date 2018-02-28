function DeliveryOptionList(key, deliveryType, deliveryDate, deliveryDescription, deliveryPrice) {
  return (
    <li id={key} className="DeliveryOptionList">
      <input type="radio" className="DeliveryOptionList-radio"/>
      <label htmlFor="" className="DeliveryOptionsList-label">
        <span className="DeliveryOptionList-type"></span>
        <span className="DeliveryOptionList-date"></span>
        <span className="DeliveryOptionList-info"></span>
        <span className="DeliveryOptionList-price"></span>
      </label>
    </li>
  );
}

export default DeliveryOptionList;
