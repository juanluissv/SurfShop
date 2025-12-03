import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart') ? JSON.parse
(localStorage.getItem('cart')) : { cartItems: [], shippingAddress: {}, paymentMethod: 'Paypal' }; 



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            //look if item from action paylod exist in state
            const existItem = state.cartItems.find((x) => x._id === item._id);

            // if existItem product is on state return item(paylod)
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => 
                    x._id === existItem._id ? item : x);
            // else add item to state
            } else {
                state.cartItems = [...state.cartItems, item];
            }
            return updateCart(state);   
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
            return updateCart(state);
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            return updateCart(state);
        },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            return updateCart(state);
        },
        clearCartItems: (state, action) => {
            state.cartItems = [];
            return updateCart(state);
        },
        resetCart: (state) => (state = initialState),
    },
});

export const { 
    addToCart, 
    removeFromCart, 
    saveShippingAddress,  
    savePaymentMethod, 
    clearCartItems,
    resetCart 
} = cartSlice.actions

export default cartSlice.reducer;