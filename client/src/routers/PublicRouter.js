import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Popup } from "../components/Popup/Popup";
import { Contact } from "../pages/Contact/Contact";
import { Main } from "../pages/Main/Main";
import { NotFound } from "../pages/NotFound/NotFound";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { RegistrationAndLogin } from "../pages/RegistrationAndLogin/RegistrationAndLogin";
import { Showroom } from "../pages/Showroom/Showroom";
import { AdminRouter } from "./AdminRouter";
import { PrivateRoute } from "./PrivateRoute";
import { UsersRouter } from "./UsersRouter";

// import { AdminRouter } from "./AdminRouter";

export const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Popup />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route
          path="/product_details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<RegistrationAndLogin />} />
        <Route path="/login" element={<RegistrationAndLogin />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <AdminRouter />
              <UsersRouter />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
