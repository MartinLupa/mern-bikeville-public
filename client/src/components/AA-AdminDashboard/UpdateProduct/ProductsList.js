import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { show } from "../../../redux/actions/popup";
const { REACT_APP_TOKEN: token } = process.env;

// {
//   "sizes": [
//       48,
//       51,
//       52
//   ],
//   "model": "lili",
//   "trail_type": "Test model",
//   "product_id": "TEST01",
//   "image": "https://content.roadbikereview.com/channels/roadbikereview/images/products/large/product_490188_25643.jpg",
//   "short_description": "Test model",
//   "description": "Test model",
//   "type": "Test model",
//   "brake_type": "Test model",
//   "groupset": "Test model",
//   "net_price": 999,
//   "vat": 999,
//   "full_price": 999,
//   "inStock": true
// }

export const ProductsList = ({
  setCurrentProduct,
  productsList,
  setIsEditing,
}) => {
  const dispatch = useDispatch();
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleDelete = (product) => {
    dispatch(show("You are about to delete a product, are you sure?"));
    fetch(`http://localhost:5000/api/products/${product._id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        token: `Bearer ${token}`,
      },
    });
  };

  const handleViewDetails = (product) => {
    // console.log(product);
  };
  return (
    <div className="products-list">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>{/* Image */}</th>
            <th>ID</th>
            <th>Model</th>
            <th>{/* View details */}</th>
            <th>{/* Edit icon */}</th>
            <th>{/* Delete icon */}</th>
          </tr>
        </thead>
        <tbody>
          {productsList?.length > 0 ? (
            productsList.map((product) => (
              <tr key={product.product_id} className="product-row">
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.product_id}</td>
                <td>{product.model}</td>
                <td>
                  <Link
                    onClick={() => handleViewDetails(product)}
                    className="dashboard-link"
                    to={`/dashboard/${product._id}`}
                  >
                    View details
                  </Link>
                </td>
                <td>
                  <ModeEditOutlineOutlinedIcon
                    className="edit-icon"
                    onClick={() => handleEdit(product)}
                  />
                </td>
                <td>
                  <DeleteForeverOutlinedIcon
                    className="delete-icon"
                    onClick={() => handleDelete(product)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No products</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
