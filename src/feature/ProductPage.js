import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductPage.css";
import ProductCard from "./ProductCard";
import FilterSide from "./FilterSide";
import { useParams } from "react-router-dom";
import { selectAllProducts } from "./productsSlice";
import { nanoid } from "nanoid";

function ProductPage() {
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
  return (
    <div className="ProductPage">
      <div className="ProductPage-leftside">
        <FilterSide />
      </div>
      <div className="ProductPage-rightside">{content}</div>
    </div>
  );
}

export default ProductPage;
