import React, { useCallback, useRef } from "react";
import "./FilterSide.css";
import { Link } from "react-router-dom";
import { starFilter, productsLoad, priceFilter } from "./productsSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { data } from "../api/apiSlice";

function FilterSide({ showNav }) {
  const param = useParams().ProductPageid;
  const dispatch = useDispatch();
  const departments = [];
  const ref = useRef(null);
  for (let i = 0; i < data.length; i++) {
    departments.push(data[i].category_results[0].categories[0].name);
  }
  const handleCategoryClick = useCallback((index) => {
    return () => dispatch(productsLoad({ index }));
  }, []);

  const content = departments.map((department, index) => (
    <li key={index} onClick={handleCategoryClick(index)}>
      <Link to={`/Amazon/${index}`}>{department}</Link>
    </li>
  ));

  const handleStarClick = useCallback((star, param) => {
    return () => dispatch(starFilter({ star, param }));
  }, []);

  const handlePriceClick = useCallback((low, high, param) => {
    return () => dispatch(priceFilter({ low, high, param }));
  }, []);

  return (
    <div
      ref={ref}
      style={{ display: showNav[0], zIndex: showNav[1] }}
      className="FilterSide Displayflex"
    >
      <div className="FilterSide-department Displayflex">
        <h2>Department</h2>
        <ul>{content}</ul>
      </div>
      <div className="FilterSide-ratesorting Displayflex">
        <h2>Avg. customer review</h2>
        <div
          className="FilterSide-ratesorting-star Displayflex"
          onClick={handleStarClick(4, param)}
        >
          <i className="FilterSide-ratesorting-sprite Fourstar" />
          <span>&amp; Up</span>
        </div>
        <div
          className="FilterSide-ratesorting-star Displayflex"
          onClick={handleStarClick(3, param)}
        >
          <i className="FilterSide-ratesorting-sprite Threestar" />
          <span>&amp; Up</span>
        </div>
        <div
          className="FilterSide-ratesorting-star Displayflex"
          onClick={handleStarClick(2, param)}
        >
          <i className="FilterSide-ratesorting-sprite Twostar" />
          <span>&amp; Up</span>
        </div>
        <div
          className="FilterSide-ratesorting-star  Displayflex"
          onClick={handleStarClick(1, param)}
        >
          <i className="FilterSide-ratesorting-sprite Onestar" />
          <span>&amp; Up</span>
        </div>
        <div className="FilterSile-pricesorting Displayflex">
          <h2>Price</h2>
          <span onClick={handlePriceClick(0, 10000, param)}>All price</span>
          <span onClick={handlePriceClick(0, 10, param)}>Under $10</span>
          <span onClick={handlePriceClick(10, 30, param)}>$10 to $30</span>
          <span onClick={handlePriceClick(30, 60, param)}>$30 to $60</span>
          <span onClick={handlePriceClick(60, 100, param)}>$60 to $100</span>
          <span onClick={handlePriceClick(100, 10000, param)}>
            $35 &amp; Above
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterSide;
