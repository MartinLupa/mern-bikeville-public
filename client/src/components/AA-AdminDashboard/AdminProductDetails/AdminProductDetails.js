import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../App";

export const AdminProductDetails = () => {
  const { id } = useParams();
  const { catalog } = useContext(GlobalContext);

  const filteredProduct = catalog?.filter((product) => product._id === id);
  const {
    _id: internal_id,
    product_id,
    customer_id,
    image,
    model,
    type,
    brake_type,
    trail_type,
    groupset,
    sizes,
    description,
    createdAt,
    updatedAt,
    net_price,
    vat,
    total_price,
    supplier,
  } = filteredProduct;

  return (
    <div className="details-container animate__animated animate__backInLeft">
      <img className="details-img" src={filteredProduct.image} alt="" />

      <div className="details-info">
        <h1>Model</h1>
        <p className="details-description">Desc</p>
        <h4>BIKE PRODUCT:</h4>
        <p>Type</p>
        <hr />
        <h4>BRAKE TYPE:</h4>
        <p>brake</p>
        <hr />
        <h4>GROUP SET:</h4>
        <p>Group</p>
        <hr />
        <h4>SIZES:</h4>
        {/* <div className="details-size">
          {sizes?.map((size) => (
            <p key={size}>{size}</p>
          ))}
        </div> */}
        <div className="details-btn">
          {/* <AddCartButton id={product_id} /> */}
        </div>
      </div>
    </div>
  );
};
