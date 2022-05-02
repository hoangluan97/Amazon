import React from "react";
import "./CategoryFourProducts.css";

function Catergoryfourproduct({
  title1,
  title2,
  title3,
  title4,
  img1,
  img2,
  img3,
  img4,
}) {
  console.log(img1);
  return (
    <div className="Home-catergoryfourproduct display-flex">
      <div className="Home-catergoryfourproduct-header">{title1}</div>
      <div className="Home-catergoryfourproduct-product display-flex">
        <div className="Home-catergoryfourproduct-grid ">
          <a href="" className="Home-catergoryfourproduct-link display-flex">
            <div className="Home-catergoryfourproduct-linkcontainer">
              <img src={img1} alt="" />
              <div className="Home-catergoryfourproduct-namecontainer">
                <span className="Home-catergoryfourproduct-name">{title1}</span>
              </div>
            </div>
          </a>
          <a href="" className="Home-catergoryfourproduct-link display-flex">
            <div className="Home-catergoryfourproduct-linkcontainer">
              <img src={img2} alt="" />
              <div className="Home-catergoryfourproduct-namecontainer">
                <span className="Home-catergoryfourproduct-name">{title2}</span>
              </div>
            </div>
          </a>
          <a href="" className="Home-catergoryfourproduct-link display-flex">
            <div className="Home-catergoryfourproduct-linkcontainer">
              <img src={img3} alt="" />
              <div className="Home-catergoryfourproduct-namecontainer">
                <span className="Home-catergoryfourproduct-name">{title3}</span>
              </div>
            </div>
          </a>
          <a href="" className="Home-catergoryfourproduct-link display-flex">
            <div className="Home-catergoryfourproduct-linkcontainer">
              <img src={img4} alt="" />
              <div className="Home-catergoryfourproduct-namecontainer">
                <span className="Home-catergoryfourproduct-name">{title4}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="Home-catergoryfourproduct-footer">
        <a href="">Shop now</a>
      </div>
    </div>
  );
}

export default Catergoryfourproduct;
