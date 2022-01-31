import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import "./AddCartIcon.css";

export const AddCartIcon = ({ id }) => {
  const { setShoppingCart, catalog } = useContext(GlobalContext);
  const handleAddClick = () => {
    const addedProduct = catalog.filter((product) => product.product_id === id);
    setShoppingCart((previousCart) => [...previousCart, addedProduct]);
  };

  return (
    <div className="add-icon-container">
      <ShoppingCartOutlinedIcon
        onClick={handleAddClick}
        id={id}
        fontSize="large"
      />
    </div>
  );
};
