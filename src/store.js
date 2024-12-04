import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './features/cart/cartSlice.js'


export const store = configureStore({
    reducer:{
        cart:cartSliceReducer
    }
})