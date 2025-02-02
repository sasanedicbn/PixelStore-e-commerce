import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsByCategory: {
    laptops: [],
    televisions: [],
    cellphones: [],
    appliances: [],
    cameras: [],
  },
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
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setProductsByCategory, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;