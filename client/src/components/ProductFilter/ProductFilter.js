import { useContext } from "react";
import { GlobalContext } from "../../App";
import { useForm } from "../../hooks/useForm";
import { GeneralButton } from "../GeneralButton/GeneralButton";
import "./ProductFilter.css";

export const ProductFilter = () => {
  const { catalog, setCatalog, setFilteredCatalog } = useContext(GlobalContext);
  const [formValues, handleInputChange] = useForm({ searchText: "" });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredCatalog(
      catalog.filter((product) =>
        product.model.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  //Price sorting. Admits new criteria by adding new types.
  const sortCatalog = (type) => {
    const types = {
      by_price_higher_first: "full_price",
      by_price_lower_first: "full_price",
    };
    const sortProperty = types[type];
    let sortedCatalog;
    if (type === "by_price_higher_first") {
      sortedCatalog = [...catalog].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
    } else if (type === "by_price_lower_first") {
      sortedCatalog = [...catalog].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
    }
    setCatalog(sortedCatalog);
  };

  return (
    <div className="product-filter-container">
      <div className="left"></div>
      <div className="center">
        <form onSubmit={handleSearch} action="">
          <input
            onChange={handleInputChange}
            type="text"
            name="searchText"
            autoComplete="off"
            placeholder="Filter product by name"
            value={searchText}
          />
          <GeneralButton text={"Search"} />
        </form>
      </div>
      <div className="right">
        <select
          onChange={(e) => sortCatalog(e.target.value)}
          name="filter"
          id=""
        >
          <option value="by_price_higher_first">Price: Higher first</option>
          <option value="by_price_lower_first">Price: Lower first</option>
        </select>
      </div>
    </div>
  );
};
