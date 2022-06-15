import React, { useState } from "react";
import "./Home.css";
import Categories from "./Categories";

function Home() {
  const [delaySlider, setdelaySlider] = useState(0);

  const handleClickLeftButton = () => {
    setdelaySlider(delaySlider - 3);
    if (delaySlider > 16) {
      setdelaySlider(0);
    }
  };

  const handleClickRightButton = () => {
    setdelaySlider(delaySlider - 12);
    if (delaySlider > 16) {
      setdelaySlider(0);
    }
  };
  return (
    <div className="Home">
      <div className="Background-slider">
        <div className="Background-image">
          <img
            className="firstImg"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
            // style={{ animationDelay: `${delaySlider}s` }}
          />
          <img
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
            style={{ animationDelay: `${delaySlider + 4}s` }}
          />
          <img
            src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
            alt=""
            style={{ animationDelay: `${delaySlider + 8}s` }}
          />
          <img
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
            style={{ animationDelay: `${delaySlider + 12}s` }}
          />
        </div>
      </div>
      <Categories />
    </div>
  );
}

export default Home;
