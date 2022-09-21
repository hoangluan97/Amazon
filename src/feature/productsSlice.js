import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../api/apiSlice";
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  arrayRemove,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from "../firebaseConfig";

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

const auth = getAuth();
let userId = "";

onAuthStateChanged(auth, (user) => {
  if (user) {
    userId = auth.currentUser.uid;
  } else {
    userId = "";
  }
});
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
      if (
        !state.addedToCartProducts.some(
          (e) =>
            e.title ===
            state.products[state.param].category_results[searchIndex].title
        )
      ) {
        state.cartQuantities += 1;
        state.addedToCartProducts.push(
          state.products[state.param].category_results[searchIndex]
        );
      }
    },
    cartDeleted(state, action) {
      const { index } = action.payload;
      state.addedToCartProducts.splice(index, 1);
      state.cartQuantities -= 1;
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
    clearCartLogout(state, action) {
      state.addedToCartProducts = [];
      state.cartQuantities = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCartProductsfromFirestore.fulfilled, (state, action) => {
        let concatProducts = state.addedToCartProducts.concat(action.payload);
        let filtDuplicate = concatProducts.filter(
          (product, index) =>
            index ===
            concatProducts.findIndex(
              (element) => element.title === product.title
            )
        );

        state.addedToCartProducts = filtDuplicate;
        state.cartQuantities = state.addedToCartProducts.length;
      })
      .addCase(fetchCartProductsfromFirestore.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(addCartProductsToFirestore.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const addCartProductsToFirestore = createAsyncThunk(
  "cartproducts/addCartProductsToFirestore",
  (cartProducts) => {
    if (userId) {
      updateDoc(doc(db, "users", userId), {
        cartproducts: arrayUnion({
          title: cartProducts.title,
          image: cartProducts.image,
          price: {
            value: cartProducts.price.value,
          },
        }),
      }).catch((error) => console.log(error.message));
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteproduct/deleteCartProductsfromFirestore",
  (cartProducts) => {
    if (userId) {
      updateDoc(doc(db, "users", userId), {
        cartproducts: arrayRemove({
          title: cartProducts.title,
          image: cartProducts.image,
          price: {
            value: cartProducts.price.value,
          },
        }),
      }).catch((error) => console.log(error.message));
    }
  }
);

export const fetchCartProductsfromFirestore = createAsyncThunk(
  "fetchcartproducts/fetchCartProductsfromFirestore",
  async () => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.data().cartproducts;
  }
);

export const updateCartProductstoFirestoreAfterLogin = createAsyncThunk(
  "updateFirestore/updateCartProductstoFirestoreAfterLogin",
  (cartProducts) => {
    for (let i = 0; i < cartProducts.length; i++)
      updateDoc(doc(db, "users", userId), {
        cartproducts: arrayUnion({
          title: cartProducts[i].title,
          image: cartProducts[i].image,
          price: {
            value: cartProducts[i].price.value,
          },
        }),
      })
        .then(() => {
          console.log(cartProducts);
        })
        .catch((error) => console.log(error.message));
  }
);

export default productsSlice.reducer;

export const {
  productsLoad,
  starFilter,
  priceFilter,
  cartAdded,
  productsSearch,
  categorySearch,
  clearCartLogout,
  cartDeleted,
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const selectAllCartProducts = (state) =>
  state.products.addedToCartProducts;
