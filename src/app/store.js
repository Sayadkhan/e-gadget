import { configureStore } from "@reduxjs/toolkit";

import productsReducer, {
  productsFetching,
} from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    //multiple reducers gose here....

    products: productsReducer,
  },
});

store.dispatch(productsFetching());
