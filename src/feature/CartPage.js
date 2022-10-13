import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CartPage.css";
import {
  selectAllCartProducts,
  deleteProduct,
  cartDeleted,
} from "./productsSlice";
import { useDispatch } from "react-redux";

function CartPage() {
  const productsAdded = useSelector(selectAllCartProducts);
  const dispatch = useDispatch();
  const initialList = [];
  for (let i = 0; i < productsAdded.length; i++) {
    initialList.push(i);
  }

  const [productStyling, setProductStyling] = useState(
    new Array(productsAdded.length).fill("CartProduct-product displayflexrow")
  );

  const [isChecked, setIsChecked] = useState(
    new Array(productsAdded.length).fill(true)
  );

  const [quantityType, setQuantityType] = useState(
    new Array(productsAdded.length).fill(1)
  );
  const [quantityValue, setQuantityValue] = useState(
    new Array(productsAdded.length).fill(1)
  );

  useEffect(() => {
    console.log(productStyling);
    console.log(isChecked);
  }, [productsAdded]);

  let subtotalArray = [];
  for (let i = 0; i < productsAdded.length; i++) {
    subtotalArray.push((productsAdded[i].price.value * 100) / 100);
  }
  let total = 0;
  for (let i = 0; i < productsAdded.length; i++) {
    total += subtotalArray[i] * quantityValue[i] * 100;
  }
  total = total / 100;

  const handleOnchangeCheckbox = (position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
    let cloneSubotalArray = [...quantityValue];
    let cloneProductStyling = [...productStyling];
    if (isChecked[position]) {
      cloneSubotalArray[position] = 0;
      setQuantityValue(cloneSubotalArray);
      cloneProductStyling[position] =
        "CartProduct-product displayflexrow CartProduct-product-unchecked";
      setProductStyling(cloneProductStyling);
    } else if (!isChecked[position]) {
      cloneSubotalArray[position] = 1;
      setQuantityValue(cloneSubotalArray);
      cloneProductStyling[position] = "CartProduct-product displayflexrow";
      setProductStyling(cloneProductStyling);
    }
  };

  const handleSelectAll = () => {
    setQuantityValue(new Array(productsAdded.length).fill(1));
    setProductStyling(
      new Array(productsAdded.length).fill("CartProduct-product displayflexrow")
    );
    setIsChecked(new Array(productsAdded.length).fill(true));
  };

  const handleDeSelectAll = () => {
    setQuantityValue(new Array(productsAdded.length).fill(0));
    setProductStyling(
      new Array(productsAdded.length).fill(
        "CartProduct-product displayflexrow CartProduct-product-unchecked"
      )
    );
    setIsChecked(new Array(productsAdded.length).fill(false));
  };

  const handleOnchangeSelect = (e, position) => {
    const updatedQuantityType = quantityType.map((item, index) =>
      index === position ? e.target.value : item
    );
    setQuantityType(updatedQuantityType);
    setQuantityValue(updatedQuantityType);
  };

  const handleOnchangeInput = (e, position) => {
    const updatedQuantityType = quantityType.map((item, index) =>
      index === position ? e.target.value : item
    );
    setQuantityValue(updatedQuantityType);
  };

  const handleUpdateButton = (e, position) => {
    const updatedQuantityType = quantityType.map((item, index) =>
      index === position ? quantityValue[index] : item
    );
    setQuantityType(updatedQuantityType);
    setQuantityValue(updatedQuantityType);
  };

  const quantityContent = (index) => {
    let array = [];
    for (let i = 1; i < 10; i++) {
      array.push(i);
    }
    const optionContent = array.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
    if (quantityType[index] < 10) {
      return (
        <select
          className="CartProduct-products-input"
          value={quantityValue[index]}
          onChange={(e) => {
            handleOnchangeSelect(e, index);
          }}
        >
          <option value="0">0</option>
          {optionContent}
          <option value="10">10+</option>
        </select>
      );
    } else if (quantityType[index] >= 10) {
      return (
        <div className="CartProduct-products-quantity displayflexrow">
          <input
            className="CartProduct-products-input"
            type="number"
            value={quantityValue[index]}
            onChange={(e) => {
              handleOnchangeInput(e, index);
            }}
          ></input>
          <button
            className="CartProduct-products-button"
            onClick={(e) => {
              handleUpdateButton(e, index);
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
      <div key={index} className={productStyling[index]}>
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
          <div className="CartProduct-products-quantity displayflexrow">
            <span>Quantity : </span>
            {quantityContent(index)}
          </div>
          <span
            onClick={() => {
              dispatch(cartDeleted({ index }));
              dispatch(deleteProduct({ product }));
              setIsChecked((prev) => {
                let result = prev.slice();
                result.splice(index, 1);
                return result;
              });
              setProductStyling((prev) => {
                let result = prev.slice();
                result.splice(index, 1);
                return result;
              });
            }}
          >
            Delete item
          </span>
        </div>
      </div>
    ));
  } else if (!productsAdded.length) {
    cartProductsContent = (
      <div className="CartProduct-product-empty">Your Amazon cart is empty</div>
    );
  }

  const selectAllContent = () => {
    if (!isChecked.every((check) => check === true)) {
      console.log("all");
      return (
        <span className="CartProduct-select" onClick={handleSelectAll}>
          Select all items
        </span>
      );
    } else if (isChecked.every((check) => check === true)) {
      console.log("notall");

      return (
        <span className="CartProduct-select" onClick={handleDeSelectAll}>
          Deselect all items
        </span>
      );
    }
  };

  return (
    <div className="CartProduct">
      <div className="CartProduct-productsContainer displayflexcolumn">
        <div className="CartProduct-header displayflexcolumn">
          <h3>Shopping Cart</h3>
          {selectAllContent()}
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
