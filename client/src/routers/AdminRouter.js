import { Route, Routes } from "react-router-dom";
import { AdminProductDetails } from "../components/AA-AdminDashboard/AdminProductDetails/AdminProductDetails";
import Dashboard from "../pages/Dashboard/Dashboard";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<AdminProductDetails />} />
    </Routes>
  );
};
