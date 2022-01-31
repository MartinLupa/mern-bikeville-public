import { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductFilter } from "../../components/ProductFilter/ProductFilter";
import { TopScroll } from "../../components/TopScroll/TopScroll";
import { fetchAndUpdateCatalog } from "../../helpers/fetchAndUpdateCatalog";
import "./Showroom.css";
const { REACT_APP_API_CATALOG: CATALOG_URL } = process.env;

export const Showroom = () => {
  console.log(URL);
  const { catalog, setCatalog, filteredCatalog, setFilteredCatalog } =
    useContext(GlobalContext);

  let productsToRender;
  if (filteredCatalog?.length > 0) {
    productsToRender = filteredCatalog;
  } else {
    productsToRender = catalog;
  }
  useEffect(() => {
    fetchAndUpdateCatalog(CATALOG_URL, setCatalog);
  }, [setCatalog]);

  return (
    <div>
      <TopScroll />
      <div className="main-container">
        <ProductFilter
          catalog={catalog}
          setCatalog={setCatalog}
          setFilteredCatalog={setFilteredCatalog}
        />
        {productsToRender?.map((product) => {
          return (
            <ProductCard
              key={product.product_id}
              id={product.product_id}
              {...product}
            />
          );
        })}
      </div>

      <div>
        <Newsletter />
      </div>
    </div>
  );
};
