import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../App";
import { CartItemButton } from "../CartItemButton/CartItemButton";
import "./CartItem.css";

export const CartItem = ({ product }) => {
  const { shoppingCart, setShoppingCart } = useContext(GlobalContext);
  const [qtyCounter, setQtyCounter] = useState(1);
  const location = useLocation();

  //Lacks lower limit to 1.
  const counterIncrement = () => {
    setQtyCounter(qtyCounter + 1);
  };
  const counterDecrement = () => {
    setQtyCounter(qtyCounter - 1);
  };

  const deleteItem = () => {
    setShoppingCart(
      shoppingCart.filter(
        (item) => item[0].product_id !== product[0].product_id
      )
    );
  };

  return (
    <div className="cart-item animate__animated animate__fadeIn">
      <div className="cart-left">
        <div className="qty-container">
          <div className="qty">{qtyCounter}</div>
        </div>

        <img className="cart-img" src={product[0].image} alt="" />

        <div>
          <h5>{product[0].model}</h5>
          <p>{product[0].product_id}</p>
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-price">€ {product[0].full_price}</div>
        {location.pathname !== "/pay" ? (
          <div>
            <CartItemButton passedEvent={counterIncrement} text={"+"} />
            <CartItemButton passedEvent={counterDecrement} text={"-"} />
            <CartItemButton passedEvent={deleteItem} text={"x"} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
