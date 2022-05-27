// import React, { useState, useRef } from "react";
// import "./CategoryClick.css";

// function CategoryClick({ index }) {
//   const [product, setProduct] = useState({
//     imgShow: img1,
//     titleShow: title1,
//     priceShow: price1,
//   });

//   const box1 = useRef(null);
//   const box2 = useRef(null);
//   const box3 = useRef(null);
//   const box4 = useRef(null);

//   return (
//     <div className="Home-categoryclick displayflex">
//       <div className="Home-categoryclick-header">{title1}</div>
//       <div className="Home-categoryclick-product displayflex">
//         <img src={product.imgShow} alt="" />
//         <span>{product.titleShow}</span>
//         <div className="Home-categoryclick-productprice">
//           <span>{product.priceShow} $</span>
//         </div>
//       </div>
//       <div className="Home-categoryclick-productcontainer">
//         <div
//           ref={box1}
//           className="Home-categoryclick-changeproduct"
//           onClick={() => {
//             setProduct({ imgShow: img1, titleShow: title1, priceShow: price1 });
//             box1.current.style.border = "solid 2px green";
//             box2.current.style.border = "solid 1px black";
//             box3.current.style.border = "solid 1px black";
//             box4.current.style.border = "solid 1px black";
//           }}
//         >
//           <img src={img1} alt="" />
//         </div>
//         <div
//           ref={box2}
//           className="Home-categoryclick-changeproduct"
//           onClick={() => {
//             setProduct({ imgShow: img2, titleShow: title2, priceShow: price2 });
//             box2.current.style.border = "solid 2px green";
//             box1.current.style.border = "solid 1px black";
//             box3.current.style.border = "solid 1px black";
//             box4.current.style.border = "solid 1px black";
//           }}
//         >
//           <img src={img2} alt="" />
//         </div>
//         <div
//           ref={box3}
//           className="Home-categoryclick-changeproduct"
//           onClick={() => {
//             setProduct({ imgShow: img3, titleShow: title3, priceShow: price3 });
//             box3.current.style.border = "solid 2px green";
//             box2.current.style.border = "solid 1px black";
//             box1.current.style.border = "solid 1px black";
//             box4.current.style.border = "solid 1px black";
//           }}
//         >
//           <img src={img3} alt="" />
//         </div>
//         <div
//           ref={box4}
//           className="Home-categoryclick-changeproduct"
//           onClick={() => {
//             setProduct({ imgShow: img4, titleShow: title4, priceShow: price4 });
//             box4.current.style.border = "solid 2px green";
//             box2.current.style.border = "solid 1px black";
//             box3.current.style.border = "solid 1px black";
//             box1.current.style.border = "solid 1px black";
//           }}
//         >
//           <img src={img4} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryClick;
