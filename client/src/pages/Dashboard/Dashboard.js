import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../App";
import { AddProductsForm } from "../../components/AA-AdminDashboard/AddProductsForm/AddProductsForm";
import { ProductsList } from "../../components/AA-AdminDashboard/UpdateProduct/ProductsList";
import { UpdateProductsForm } from "../../components/AA-AdminDashboard/UpdateProduct/UpdateProductsForm";
import { fetchAndUpdateCatalog } from "../../helpers/fetchAndUpdateCatalog";
import "./Dashboard.css";
const { REACT_APP_API_CATALOG: CATALOG_URL } = process.env;

const initialValues = {
  model: "",
  trail_type: "",
  product_id: "",
  image: "",
  short_description: "",
  description: "",
  type: "",
  brake_type: "",
  groupset: "",
  sizes: [],
  net_price: "",
  vat: "",
  full_price: "",
  inStock: true,
};

export default function Dashboard() {
  const { catalog, setCatalog } = useContext(GlobalContext);
  const [currentProduct, setCurrentProduct] = useState(initialValues);
  const [productsList, setProductsList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSwitchForm = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    fetchAndUpdateCatalog(CATALOG_URL, setCatalog);
    setProductsList(catalog);
  }, [catalog, isEditing]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <input type="text" placeholder="Search products by ID" />
        <AddBoxOutlinedIcon className="add-icon" onClick={handleSwitchForm} />
      </div>
      <div className="dashboard-bottom">
        {isEditing ? (
          <UpdateProductsForm
            setCatalog={setCatalog}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
            initialValues={initialValues}
          />
        ) : (
          <AddProductsForm />
        )}
        <ProductsList
          setIsEditing={setIsEditing}
          productsList={productsList}
          setCurrentProduct={setCurrentProduct}
        />
      </div>
    </div>
  );
}
