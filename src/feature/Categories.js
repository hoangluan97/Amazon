import React from "react";
import "./Categories.css";
import Category from "./Category";
import Catergoryfourproduct from "./CategoryFourProducts";
import CategoryClick from "./CategoryClick";
import CategoryHorizontal from "./CategoryHorizontal";

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

      {/* <CategoryClick
        title1="Headsets"
        title2="Keyboards"
        title3="Computer mice"
        title4="Chairs"
        img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
        img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
        img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
        img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
        price1="10"
        price2="20"
        price3="30"
        price4="40"
      /> */}
      <CategoryHorizontal index="6" />
    </div>
  );
}

export default Categories;
