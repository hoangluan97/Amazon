import { createSlice } from "@reduxjs/toolkit";
import { data } from "../api/apiSlice";

const initialState = {
  products: data,
  param: 0,
  starFilter: 0,
  priceFilter: 0,
  cartQuantities: 0,
  searchCategory: 0,
  addedToCartProducts: [],
  searchProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsLoad(state, action) {
      const { index } = action.payload;
      state.param = index;
      state.products[index].category_results = data[index].category_results;
      state.searchProducts = [];
    },
    starFilter(state, action) {
      const { star, param } = action.payload;
      let filter = [];
      if (state.searchProducts.length) {
        filter = state.searchProducts.filter((product) => {
          return product.rating > star;
        });
      } else {
        filter = data[param].category_results.filter((product) => {
          return product.rating > star;
        });
      }
      state.products[param].category_results = filter;
    },

    priceFilter(state, action) {
      const { low, high, param } = action.payload;
      let filter = [];
      if (state.searchProducts.length) {
        filter = state.searchProducts.filter((product) => {
          return product.price.value >= low && product.price.value < high;
        });
      } else {
        filter = data[param].category_results.filter((product) => {
          return product.price.value >= low && product.price.value < high;
        });
      }
      state.products[param].category_results = filter;
    },
    cartAdded(state, action) {
      const { searchIndex } = action.payload;
      state.cartQuantities += 1;
      state.addedToCartProducts.push(
        state.products[state.param].category_results[searchIndex]
      );
    },
    productsSearch(state, action) {
      const { searchInput } = action.payload;
      state.products[state.param].category_results.splice(
        0,
        state.products[state.param].category_results.length
      );
      state.searchProducts = [];
      if (state.searchCategory == 0) {
        for (let i = 0; i < data.length; i++) {
          let categoryFilter = data[i].category_results.filter((product) => {
            // return product.title.includes(searchInput);
            return product.title
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          });
          if (categoryFilter.length) {
            state.searchProducts = state.searchProducts.concat(categoryFilter);
          }
        }
      } else {
        let categoryFilter = data[
          state.searchCategory - 1
        ].category_results.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        });
        if (categoryFilter.length) {
          state.searchProducts = state.searchProducts.concat(categoryFilter);
        }
      }
      state.products[state.param].category_results = state.searchProducts;
    },
    categorySearch(state, action) {
      const { index } = action.payload;
      state.searchCategory = index;
    },
  },
});

export default productsSlice.reducer;

export const {
  productsLoad,
  starFilter,
  priceFilter,
  cartAdded,
  productsSearch,
  categorySearch,
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.products;
