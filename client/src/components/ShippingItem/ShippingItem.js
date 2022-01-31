import "./ShippingItem.css";

export const ShippingItem = ({ logo, price, courier_company, passedEvent }) => {
  return (
    <div className="shipping-courier">
      <input
        onChange={passedEvent}
        name="shipping_company"
        value={courier_company}
        type="radio"
      />
      <img className="shipping-img" src={logo} alt="" />{" "}
      <p>Shipping to nearest picking spot</p>
      <div className="shipping-price">
        <p>€ {price}</p>
      </div>
    </div>
  );
};
