import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetching = createAsyncThunk(
  "products/productsFetching",
  async () => {
    const res = await axios.get(
      "https://eager-sable-airedale.glitch.me/products"
    );
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetching.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(productsFetching.fulfilled, (state, action) => {
      state.status = "successful";
      state.items = action.payload;
    });
    builder.addCase(productsFetching.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default productsSlice.reducer;
