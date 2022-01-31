import "./PaymentItem.css";

export const PaymentItem = ({ product }) => {
  return (
    <div className="payment-item">
      <div>
        <h6>{product[0].model}</h6>
        <h6>{product[0].product_id}</h6>
      </div>
      <div className="payment-amounts">
        <div>
          <p>Net price: </p>
          <p>VAT: </p>
          <p>
            <strong>Total:</strong>
          </p>
        </div>
        <div className="amounts">
          <p>€ {product[0].net_price}</p>
          <p>€ {product[0].vat}</p>
          <p>
            <strong>€ {product[0].full_price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
