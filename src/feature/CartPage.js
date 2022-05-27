import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartPage.css";

function CartPage() {
  const productsAdded = useSelector(
    (state) => state.products.addedToCartProducts
  );

  const initialList = [];
  for (let i = 0; i < productsAdded.length; i++) {
    initialList.push(i);
  }

  let subtotal = 0;
  for (let i = 0; i < productsAdded.length; i++) {
    subtotal += productsAdded[i].price.value * 100;
  }

  subtotal = subtotal / 100;

  const [isChecked, setIsChecked] = useState(
    new Array(productsAdded.length).fill(true)
  );

  const [total, setTotal] = useState(subtotal);
  const [quantityType, setQuantityType] = useState(
    new Array(productsAdded.length).fill(0)
  );
  const [quantityValue, setQuantityValue] = useState(
    new Array(productsAdded.length).fill(1)
  );

  const handleOnchangeCheckbox = (position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
    console.log(updatedCheckedState);
    if (isChecked[position]) {
      setTotal(
        (total * 100) / 100 - (productsAdded[position].price.value * 100) / 100
      );
    } else if (!isChecked[position]) {
      setTotal(
        (total * 100) / 100 + (productsAdded[position].price.value * 100) / 100
      );
    }
  };

  const handleOnchangeSelect = (e) => {
    setQuantityType(e.target.value);
    setQuantityValue(e.target.value);
  };

  const quantityContent = () => {
    let array = [];
    let inputValue = "";

    for (let i = 1; i < 10; i++) {
      array.push(i);
    }
    const optionContent = array.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
    if (quantityType < 10) {
      return (
        <select
          defaultValue={1}
          className="CartProduct-products-input"
          onChange={(e) => {
            setQuantityType(e.target.value);
            setQuantityValue(e.target.value);
          }}
        >
          <option value="0">0 &#40;delete&#41;</option>
          {optionContent}
          <option value="10">10+</option>
        </select>
      );
    } else if (quantityType >= 10) {
      return (
        <div className="CartProduct-products-quantity displayflexrow">
          <input
            className="CartProduct-products-input"
            type="text"
            value={quantityValue}
            onChange={(e) => {
              setQuantityValue(e.target.value);
              inputValue = e.target.value;
              console.log(inputValue);
            }}
          ></input>
          <button
            className="CartProduct-products-button"
            onClick={() => {
              setQuantityType(quantityValue);
            }}
          >
            Update
          </button>
        </div>
      );
    }
  };
  let cartProductsContent = "";

  let productsAddedadjust = productsAdded.slice();
  let delivery = {
    price: {
      raw: "FREE Shipping on orders over $25 shipped by Amazon",
    },
  };

  for (let i = 0; i < productsAddedadjust.length; i++) {
    if (!("delivery" in productsAddedadjust[i])) {
      productsAddedadjust[i] = { ...productsAddedadjust[i], delivery };
    }
  }

  if (productsAdded.length) {
    cartProductsContent = productsAddedadjust.map((product, index) => (
      <div key={index} className="CartProduct-product displayflexrow">
        <div className="CartProduct-products-img displayflexrow">
          <input
            type="checkbox"
            value={index}
            checked={isChecked[index]}
            onChange={() => handleOnchangeCheckbox(index)}
          />
          <img src={product.image} alt="" />
        </div>
        <div className="CartProduct-products-info displayflexcolumn">
          <span className="CartProduct-products-title">{product.title}</span>
          <span className="CartProduct-products-price">
            {product.price.value} $
          </span>
          {/* <span className="CartProduct-products-delivery">
            {product.delivery.price.raw}
          </span> */}
          <div className="CartProduct-products-quantity displayflexrow">
            <span>Quantity : </span>
            {quantityContent()}
          </div>
        </div>
      </div>
    ));
  } else if (!productsAdded.length) {
    cartProductsContent = (
      <div className="CartProduct-product-empty">Your Amazon cart is empty</div>
    );
  }

  return (
    <div className="CartProduct displayflexrow">
      <div className="CartProduct-productsContainer displayflexcolumn">
        <div className="CartProduct-header displayflexcolumn">
          <h3>Shopping Cart</h3>
          <span className="CartProduct-select">Select all items</span>
        </div>
        <div className="CartProduct-products displayflexcolumn">
          {cartProductsContent}
        </div>
      </div>
      <div className="CartProduct-checkout displayflexcolumn">
        <span className="CartProduct-checkout-subtotal">Subtotal {total}</span>
        <button className="CartProduct-checkout-button">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
