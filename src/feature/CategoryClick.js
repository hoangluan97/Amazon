import React, { useState } from "react";
import "./CategoryClick.css";

function CategoryClick({
  title1,
  title2,
  title3,
  title4,
  img1,
  img2,
  img3,
  img4,
  price1,
  price2,
  price3,
  price4,
}) {
  const [product, setProduct] = useState({
    imgShow: img1,
    titleShow: title1,
    priceShow: price1,
  });

  //   const [imgShow, titleShow, priceShow] = product;

  return (
    <div className="Home-categoryclick displayflex">
      <div className="Home-categoryclick-header">{title1}</div>
      <div className="Home-categoryclick-product displayflex">
        <img src={product.imgShow} alt="" />
        <span>{product.titleShow}</span>
        <div className="Home-categoryclick-productprice">
          <span>{product.priceShow} $</span>
        </div>
      </div>
      <div className="Home-categoryclick-productcontainer">
        <div
          className="Home-categoryclick-changeproduct"
          onClick={() => {
            setProduct({ imgShow: img1, titleShow: title1, priceShow: price1 });
          }}
        >
          <img src={img1} alt="" />
        </div>
        <div
          className="Home-categoryclick-changeproduct"
          onClick={() => {
            setProduct({ imgShow: img2, titleShow: title2, priceShow: price2 });
          }}
        >
          <img src={img2} alt="" />
        </div>
        <div
          className="Home-categoryclick-changeproduct"
          onClick={() => {
            setProduct({ imgShow: img3, titleShow: title3, priceShow: price3 });
          }}
        >
          <img src={img3} alt="" />
        </div>
        <div
          className="Home-categoryclick-changeproduct"
          onClick={() => {
            setProduct({ imgShow: img4, titleShow: title4, priceShow: price4 });
          }}
        >
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CategoryClick;
