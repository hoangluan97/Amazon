import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../api/apiSlice";
import { productsSearch, categorySearch } from "../feature/productsSlice";
import { useParams } from "react-router-dom";

function Navbar() {
  const [categoriesSearch, setCategoriesSearch] = useState("All");
  const param = useSelector((state) => state.products.param);
  const dispatch = useDispatch();
  const cartQuantities = useSelector((state) => state.products.cartQuantities);
  const [searchInput, setSearchInput] = useState("");
  const Departments = ["All"];
  for (let i = 0; i < data.length; i++) {
    Departments.push(data[i].category_results[0].categories[0].name);
  }
  const optionContent = Departments.map((department, index) => (
    <option key={index} data-key={index} value={department}>
      {department}
    </option>
  ));

  return (
    <div className="header">
      <div className="header-upper">
        <Link to="/Home">
          <div className="header-logo-wrap">
            <i className="header-sprite header-logo"></i>
          </div>
        </Link>
        <div className="header-location-container">
          <div className="header-location">
            <div className="header-location-icon">
              <i className="header-location-dot header-sprite"></i>
            </div>
            <div className="header-location-line">
              <span className="header-location-line-1">Hello</span>
              <span className="header-location-line-2">
                Select your address
              </span>
            </div>
          </div>
        </div>
        <div className="header-search">
          <form action="" className="header-search-form">
            <div className="header-search-categories">
              <div className="header-search-facade">
                <span className="header-search-label">{categoriesSearch}</span>
                <i className="header-dot"></i>
              </div>
              <select
                className="header-search-list"
                onChange={(e) => {
                  setCategoriesSearch(e.target.value);
                  const selectedIndex = e.target.options.selectedIndex;
                  const index =
                    e.target.options[selectedIndex].getAttribute("data-key");
                  dispatch(categorySearch({ index }));
                }}
              >
                {optionContent}
              </select>
            </div>
            <div className="header-search-input">
              <input
                type="text"
                id="header-search-textbox"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
            </div>
            <div className="header-search-submit">
              <Link to={`/${param}`}>
                <button
                  className="header-search-button"
                  onClick={(e) => {
                    // e.preventDefault();
                    dispatch(productsSearch({ searchInput }));
                    setSearchInput("");
                  }}
                >
                  <i
                    src="https://www.w3schools.com/css/img_trans.gif"
                    className="header-search-icon header-sprite"
                  ></i>
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="header-tools">
          <div className="header-tool header-language"></div>
          <div className="header-signin header-tool">
            <span className="header-signin-line1 header-line1">
              Hello, Sign in
            </span>
            <span className="header-signin-line2 header-line2">
              Account &amp; Lists
              <span className="header-signin-dot header-dot"></span>
            </span>
            <div className="header-signin-dropdown header-flexcolumn">
              <div className="header-signin-top header-flexcolumn">
                <button>Sign in</button>
                <span>
                  New customer ? <a href="">Start here</a>
                </span>
              </div>
              <div className="header-signin-bot header-flexcolumn">
                <div className="header-signin-bot-list header-flexcolumn">
                  <span className="header-signin-bot-bold">Your List</span>
                  <a href="">Create your list</a>
                  <a href="">Find a list or Registry</a>
                  <a href="">AmazonSmile Charity List</a>
                </div>
                <div className="header-signin-bot-account header-flexcolumn">
                  <span className="header-signin-bot-bold">Your Account</span>
                  <a href="">Account</a>
                  <a href="">Order</a>
                  <a href="">Recommendation</a>
                  <a href="">Browsing History</a>
                  <a href="">Watchlist</a>
                  <a href="">Video Purchases and Rentals</a>
                  <a href="">Kindle Unlimited</a>
                  <a href="">Content &amp; Devices</a>
                  <a href="">Subcribes and Save items</a>
                  <a href="">Menberships &amp; Subcriptions</a>

                  <a href="">Music library</a>
                </div>
              </div>
            </div>
          </div>
          <div className="header-return header-tool">
            <div className="header-return-line header-tool">
              <span className="header-return-line1 header-line1">Returns</span>
              <span className="header-return-line2 header-line2">
                &amp; Orders
              </span>
            </div>
          </div>
          <Link to="/Cart" className="header-bracket-container header-tool">
            <div className="header-counter">
              <span className="header-counter-number">{cartQuantities}</span>
              <span className="header-sprite header-bracket-icon"></span>
            </div>
            <div className="header-text-container">
              <span className="header-bracket-text">Cart</span>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="header-nav">
        <div className="header-nav-all">
          <i className="header-sprite header-nav-bar"></i>
          <span>All</span>
        </div>
        <div className="header-nav-link">
          <a href="">Today's Deals</a>
          <a href="">Customer Service</a>
          <a href="">Registry</a>
          <a href="">Gift Cards</a>
          <a href="">Sell</a>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
