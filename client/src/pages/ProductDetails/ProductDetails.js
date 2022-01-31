import { useContext } from "react";
import { GlobalContext } from "../../App";
import { AddCartButton } from "../../components/AddCartButton/AddCartButton";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const { catalog, productID } = useContext(GlobalContext);

  const filteredProduct = catalog?.filter(
    (product) => product.product_id === productID
  );
  const {
    model,
    image,
    description,
    type,
    brake_type,
    groupset,
    sizes,
    product_id,
  } = filteredProduct[0];

  return (
    <div className="details-container animate__animated animate__backInLeft">
      <img className="details-img" src={image} alt="" />

      <div className="details-info">
        <h1>{model}</h1>
        <p className="details-description">{description}</p>
        <h4>BIKE PRODUCT:</h4>
        <p>{type}</p>
        <hr />
        <h4>BRAKE TYPE:</h4>
        <p>{brake_type}</p>
        <hr />
        <h4>GROUP SET:</h4>
        <p>{groupset}</p>
        <hr />
        <h4>SIZES:</h4>
        <div className="details-size">
          {sizes?.map((size) => (
            <p key={size}>{size}</p>
          ))}
        </div>
        <div className="details-btn">
          <AddCartButton id={product_id} />
        </div>
      </div>
    </div>
  );
};
