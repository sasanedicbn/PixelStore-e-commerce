
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/bestSellerReducer'
import { productsApi } from './slices/apiSlice';

const store = configureStore({
  reducer: {
    products: productsReducer, 
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export default store;