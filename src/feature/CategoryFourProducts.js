import React, { useCallback } from "react";
import "./CategoryFourProducts.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "./productsSlice";
import { productsLoad } from "./productsSlice";
import { useParams } from "react-router-dom";

function Catergoryfourproduct({ index }) {
  const productsData = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const dataFour = productsData[index].category_results.slice(0, 4);
  const param = useParams().ProductsPageid;
  const handleClick = useCallback(() => {
    return () => dispatch(productsLoad({ param }));
  }, []);
  const content = dataFour.map((product) => (
    <div
      key={product.position}
      className="Home-catergoryfourproduct-linkcontainer"
    >
      <img src={product.image} alt="" />
    </div>
  ));
  return (
    <div className="Home-catergoryfourproduct display-flex">
      <div className="Home-catergoryfourproduct-header">
        {dataFour[1].categories[0].name}
      </div>
      <div className="Home-catergoryfourproduct-product display-flex">
        <div className="Home-catergoryfourproduct-grid">{content}</div>
      </div>
      <div className="Home-catergoryfourproduct-footer" onClick={handleClick}>
        <Link to={`/Amazon/${index}`}>Shop now</Link>
      </div>
    </div>
  );
}

export default Catergoryfourproduct;
