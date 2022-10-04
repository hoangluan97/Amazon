import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ProductPage.css";
import ProductCard from "./ProductCard";
import FilterSide from "./FilterSide";
import { useParams } from "react-router-dom";
import { selectAllProducts } from "./productsSlice";
import { nanoid } from "nanoid";
import useWindowSize from "./useWindowSize";

function ProductPage() {
  const windowSize = useWindowSize();
  const [showNav, setShowNav] = useState(["block", 1]);
  let param = useParams().ProductPageid;
  const data = useSelector(selectAllProducts);
  const content = data[param].category_results.map((product, index) => (
    <ProductCard
      key={nanoid()}
      imgScr={product.image}
      productName={product.title}
      // price={product.price.value}
      price={product.price.value}
      rate={product.rating}
      searchIndex={index}
    />
  ));
  useEffect(() => {
    console.log(windowSize.width);
    if (windowSize.width <= 600 && showNav[0] === "block") {
      setShowNav((prev) => ["none", -1]);
    } else if (windowSize.width >= 600 && showNav[0] === "none") {
      setShowNav((prev) => ["block", 100]);
    }
  }, [windowSize]);
  return (
    <div className="ProductPage">
      <button
        className="ProductPage-button"
        onClick={() => {
          setShowNav((prev) => {
            if (prev[0] === "block") {
              return ["none", -1];
            } else {
              return ["block", 100];
            }
          });
        }}
      >
        Sorting
      </button>

      <div
        style={{ display: showNav[0], zIndex: showNav[1] }}
        className="ProductPage-leftside"
      >
        <FilterSide showNav={showNav} />
      </div>
      <div className="ProductPage-rightside">{content}</div>
    </div>
  );
}

export default ProductPage;
