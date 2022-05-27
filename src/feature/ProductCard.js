import React, { useCallback } from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { cartAdded } from "./productsSlice";

function ProductCard({ imgScr, productName, price, rate, searchIndex }) {
  const dispatch = useDispatch();
  const addToCart = useCallback((searchIndex) => {
    return () => dispatch(cartAdded({ searchIndex }));
  }, []);
  const starRating = () => {
    if (4.75 <= rate && rate <= 5) {
      return <i className="ProductCard-rating Fivestar"></i>;
    } else if (4.25 <= rate && rate < 4.75) {
      return <i className="ProductCard-rating Fourhalfstar"></i>;
    } else if (3.75 <= rate && rate < 4.25) {
      return <i className="ProductCard-rating Fourstar"></i>;
    } else if (3.25 <= rate && rate < 3.75) {
      return <i className="ProductCard-rating Threehalfstar"></i>;
    } else if (2.75 <= rate && rate < 3.25) {
      return <i className="ProductCard-rating Threestar"></i>;
    } else if (2.25 <= rate && rate < 2.75) {
      return <i className="ProductCard-rating Twohalfstar"></i>;
    } else if (1.75 <= rate && rate < 2.25) {
      return <i className="ProductCard-rating Twostar"></i>;
    } else if (1.25 <= rate && rate < 1.75) {
      return <i className="ProductCard-rating Onehalfstar"></i>;
    } else if (0.75 <= rate && rate < 1.25) {
      return <i className="ProductCard-rating Onestar"></i>;
    } else {
      return <i className="ProductCard-rating Threehalfstar"></i>;
    }
  };
  return (
    <div className="ProductCard">
      <img className="ProductCard-image" src={imgScr} alt="" />
      <h2 className="ProductCard-name">{productName}</h2>
      {starRating()}
      <span className="ProductCard-price">{price}$</span>
      <button className="ProductCard-button" onClick={addToCart(searchIndex)}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
