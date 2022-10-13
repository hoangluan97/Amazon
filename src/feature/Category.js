import React, { useCallback } from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectAllProducts, productsLoad } from "./productsSlice";
import { useParams } from "react-router-dom";
import { data } from "../api/apiSlice";

function Testinng({ index }) {
  const param = useParams().ProductPageid;
  const dispatch = useDispatch();
  return (
    <div className="Home-Category">
      <div className="Home-Category-Header">
        {data[index].category_results[0].categories[0].name}
      </div>
      <div className="Home-Category-Img">
        <img src={data[index].category_results[0].image} alt="" />
      </div>
      <div
        className="Home-Category-Footer"
        onClick={() => dispatch(productsLoad({ index }))}
      >
        <Link to={`/Amazon/${index}`}>Shop now</Link>
      </div>
    </div>
  );
}

export default Testinng;
