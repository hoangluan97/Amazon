import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="header-upper">
        <div className="header-logo-wrap">
          <img
            src="https://www.w3schools.com/css/img_trans.gif"
            className="header--logo header-sprite"
          />
        </div>
        <div className="header-location-container">
          <div className="header-location">
            <div className="header-location-icon">
              <img
                src="https://www.w3schools.com/css/img_trans.gif"
                className="header-location-dot header-sprite"
              />
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
                <span className="header-search-label">All</span>
                <i className="header-dot"></i>
              </div>
              <select className="header-search-list">
                <option selected="selected">All Departments</option>
                <option>Alexa Skills</option>
                <option>Amazon Devices</option>
                <option>Amazon Explore</option>
                <option>Amazon Pharmacy</option>
                <option>Amazon Warehouse</option>
                <option>Appliances</option>
                <option>Apps &amp; Games</option>
                <option value="search-alias=arts-crafts">
                  Arts, Crafts &amp; Sewing
                </option>
                <option value="search-alias=audible">
                  Audible Books &amp; Originals
                </option>
                <option value="search-alias=automotive">
                  Automotive Parts &amp; Accessories
                </option>
                <option>AWS Courses</option>
                <option>Baby</option>
                <option>Beauty &amp; Personal Care</option>
                <option>Books</option>
                <option>CDs &amp; Vinyl</option>
                <option>Cell Phones &amp; Accessories</option>
                <option>Clothing, Shoes &amp; Jewelry</option>
                <option>&nbsp;&nbsp;&nbsp;Women</option>
                <option>&nbsp;&nbsp;&nbsp;Men</option>
                <option>&nbsp;&nbsp;&nbsp;Girls</option>
                <option>&nbsp;&nbsp;&nbsp;Boys</option>
                <option>&nbsp;&nbsp;&nbsp;Baby</option>
                <option>Collectibles &amp; Fine Art</option>
                <option>Computers</option>
                <option>Credit and Payment Cards</option>
                <option>Digital Educational Resources</option>
                <option>Digital Music</option>
                <option>Electronics</option>
                <option>Garden &amp; Outdoor</option>
                <option>Gift Cards</option>
                <option>Grocery &amp; Gourmet Food</option>
                <option>Handmade</option>
                <option>Health, Household &amp; Baby Care</option>
                <option>Home &amp; Business Services</option>
                <option>Home &amp; Kitchen</option>
                <option>Industrial &amp; Scientific</option>
                <option>Just for Prime</option>
                <option>Kindle Store</option>
                <option>Luggage &amp; Travel Gear</option>
                <option>Luxury Stores</option>
                <option>Magazine Subscriptions</option>
                <option>Movies &amp; TV</option>
                <option>Musical Instruments</option>
                <option>Office Products</option>
                <option>Pet Supplies</option>
                <option>Premium Beauty</option>
                <option>Prime Video</option>
                <option>Smart Home</option>
                <option>Software</option>
                <option>Sports &amp; Outdoors</option>
                <option>Subscribe &amp; Save</option>
                <option>Subscription Boxes</option>
                <option>Tools &amp; Home Improvement</option>
                <option>Toys &amp; Games</option>
                <option>Under $10</option>
                <option>Video Games</option>
              </select>
            </div>
            <div className="header-search-input">
              <input type="text" id="header-search-textbox" />
            </div>
            <div className="header-search-submit">
              <button className="header-search-button">
                <img
                  src="https://www.w3schools.com/css/img_trans.gif"
                  className="header-search-icon header-sprite"
                />
              </button>
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
                  <span className="header-signin-bot-yourlist">Your List</span>
                  <a href="">Create your list</a>
                  <a href="">Find a list or Registry</a>
                  <a href="">AmazonSmile Charity List</a>
                </div>
                <div className="header-signin-bot-account header-flexcolumn">
                  <span className="header-signin-bot-yourlist">
                    Your Account
                  </span>
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
                  {/* <a href="">Prime Membership</a>
                  <a href="">Amazon credit cards</a> */}
                  <a href="">Music library</a>
                  {/* <a href="">Start a selling account</a>
                  <a href="">Register for a Bussiness Account</a> */}
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
          <div className="header-bracket-container header-tool">
            <div className="header-counter">
              <span className="header-counter-number">0</span>
              <span className="header-sprite header-bracket-icon"></span>
            </div>
            <div className="header-text-container">
              <span className="header-bracket-text">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
