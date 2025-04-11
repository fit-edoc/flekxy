import { createSlice } from '@reduxjs/toolkit';
import productData from '../../data/product'; // Static import of JSON

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: productData,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
