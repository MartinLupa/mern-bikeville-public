import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { GlobalContext } from "../../App";
import { CircularIndeterminate } from "../../components/CircularProgress/CircularProgress";
import { GeneralButton } from "../../components/GeneralButton/GeneralButton";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import "./Pay.css";
const { REACT_APP_API_PAYMENT: PAYMENT_URL, STRIPE_PUBLIC_KEY } = process.env;

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const { order, setShoppingCart } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(PAYMENT_URL, {
          tokenId: stripeToken.id,
          amount: order.total * 100,
        });
        console.log(res.data);
        navigate("/success");
        setShoppingCart([]);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, order.total, setShoppingCart]);

  return (
    <div className="pay-container">
      {stripeToken ? (
        <div className="processing-info">
          <CircularIndeterminate />
          <h2>
            <span>Processing. Please wait...</span>
          </h2>
        </div>
      ) : (
        <div className="summary-info">
          <OrderSummary />
          <StripeCheckout
            name="Bike Ville"
            billingAddress
            shippingAddress
            description={`Your total is EUR ${order.total},00`}
            amount={order.total * 100}
            token={onToken}
            stripeKey={STRIPE_PUBLIC_KEY}
          >
            <GeneralButton text={"PAY"} />
          </StripeCheckout>
        </div>
      )}
    </div>
  );
};
