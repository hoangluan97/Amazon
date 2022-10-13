import React from "react";
import "./Categories.css";
import Category from "./Category";
import Catergoryfourproduct from "./CategoryFourProducts";

function Categories() {
  return (
    <div className="Home-Categories">
      <Category index="0" />
      <Category index="1" />
      <Category index="2" />
      <Catergoryfourproduct index="9" />
      <Category index="3" />
      <Category index="4" />
      <Category index="5" />
      <Category index="8" />
      <Category index="7" />
    </div>
  );
}

export default Categories;
