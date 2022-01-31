import "./CartItemButton.css";

export const CartItemButton = ({ passedEvent, text }) => {
  return (
    <button onClick={passedEvent} className="cart-item-btn">
      {text}
    </button>
  );
};
