import React from "react";
import "./Categories.css";
import Category from "./Category";
import Catergoryfourproduct from "./CategoryFourProducts";
import CategoryClick from "./CategoryClick";
import CategoryHorizontal from "./CategoryHorizontal";

function Categories() {
  return (
    <div className="Home-Categories">
      <Category
        title="Healthy &amp; Personal Care"
        imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
      />
      <Category
        title="New arrivals in Toys"
        imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
      />
      <Category
        title="Computers &amp; Accessories"
        imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
      />
      <Catergoryfourproduct
        title1="Headsets"
        title2="Keyboards"
        title3="Computer mice"
        title4="Chairs"
        img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
        img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
        img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
        img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
      />
      <Category
        title="Create with strip lights"
        imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
      />
      <Category
        title="For your Fitness Needs"
        imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
      />
      <Category
        title="Dress"
        imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
      />
      <Category
        title="Books"
        imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/MothersDay/Fuji_Apr22_MothersDay_dashcard_1x._SY304_CB623709835_.jpg"
      />
      <Category
        title="Shop Laptops &amp; Tablets"
        imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
      />
      <CategoryClick
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
      />
      <CategoryHorizontal imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" />
    </div>
  );
}

export default Categories;
