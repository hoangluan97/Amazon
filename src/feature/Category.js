import React, { useEffect } from "react";
import "./Category.css";
// import { useGetProductsQuery } from "../api/apiSlice";
import { Axios } from "axios";
import axios from "axios";

function Category({ title, imgSrc }) {
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.rainforestapi.com/request?api_key=AFCE728547BB4C1589EA21B8D13E10B9&type=Category&amazon_domain=amazon.com&asin=B073JYC4XM"
  //     )
  //     .then((res) => {
  //       const rs = res.data;
  //       console.log(rs);
  //     });
  // });
  // const {
  //   data: products = [],
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetPostsQuery();

  return (
    <div className="Home-Category">
      <div className="Home-Category-Header">{title}</div>
      <div className="Home-Category-Img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="Home-Category-Footer">
        <a href="">Shop now</a>
      </div>
    </div>
  );
}

export default Category;
