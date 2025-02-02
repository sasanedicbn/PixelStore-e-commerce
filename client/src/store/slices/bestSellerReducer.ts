import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsByCategory: {
    laptops: [],
    televisions: [],
    cellphones: [],
    appliances: [],
    cameras: [],
  },
  allProducts:[],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsByCategory(state, action) {
      const { category, products } = action.payload;
      state.productsByCategory[category] = products;
    },
    setAllProducts(state,action) {
      state.allProducts = action.payload
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setProductsByCategory, setLoading, setError, setAllProducts } = productsSlice.actions;
export default productsSlice.reducer;