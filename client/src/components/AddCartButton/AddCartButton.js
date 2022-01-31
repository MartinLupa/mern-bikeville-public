import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import "./AddCartButton.css";

export const AddCartButton = ({ id }) => {
  const { setShoppingCart, catalog } = useContext(GlobalContext);

  const handleAddClick = () => {
    const addedProduct = catalog.filter((product) => product.product_id === id);
    setShoppingCart((previousCart) => [...previousCart, addedProduct]);
    console.log(addedProduct);
  };

  return (
    <button onClick={handleAddClick} id={id} className="add-cart-btn">
      <ShoppingCartOutlinedIcon fontSize="small" className="add-cart-icon" />
      ADD TO CART
    </button>
  );
};
