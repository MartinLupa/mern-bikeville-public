import { Route, Routes } from "react-router-dom";
import { Pay } from "../pages/Pay/Pay";
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart";
import { Success } from "../pages/Success/Success";

export const UsersRouter = () => {
  return (
    <Routes>
      <Route path="/shopping_cart" element={<ShoppingCart />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};
