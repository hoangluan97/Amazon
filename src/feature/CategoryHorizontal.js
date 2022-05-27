import React, { useRef, useEffect } from "react";
import "./CategoryHorizontal.css";
import { Link } from "react-router-dom";
import { data } from "../api/apiSlice";

function CategoryHorizontal({ index }) {
  const scrollref = useRef(null);
  const buttonleft = useRef(null);
  const buttonright = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (buttonleft.current && !buttonleft.current.contains(e.target)) {
        buttonleft.current.style.border = "none";
      } else {
        buttonleft.current.style.border = "solid 2px #007185";
      }
      if (buttonright.current && !buttonright.current.contains(e.target)) {
        buttonright.current.style.border = "none";
      } else {
        buttonright.current.style.border = "solid 2px #007185";
      }
    };
    document.addEventListener("mousedown", handleClick, true);
    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, [buttonleft, buttonright]);

  const scroll = (distance) => {
    scrollref.current.scrollLeft += distance;
  };

  const content = data[index].category_results.map((product) => (
    <img key={product.position} src={product.image} alt="" />
  ));

  return (
    <div className="Home-categoryhorizontal">
      <div className="Home-categoryhorizontal-container">
        <div className="Home-categoryhorizontal-header">Books for you</div>
        <div className="Home-categoryhorizontal-scrollcontainer">
          <div className="Home-categoryhorizontal-imgcontainer" ref={scrollref}>
            {content}
            <button ref={buttonleft} onClick={() => scroll(2400)}>
              <i className="fa-solid fa-angle-right fa-2xl"></i>
            </button>
            <button
              ref={buttonright}
              className="right"
              onClick={() => scroll(-2400)}
            >
              <i className="fa-solid fa-angle-left fa-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryHorizontal;
