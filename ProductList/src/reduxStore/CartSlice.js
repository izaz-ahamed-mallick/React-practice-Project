import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartProduct: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cartProduct.find(
                (item) => item.id === action.payload.id
            );
            if (existingProduct) {
                {
                    existingProduct.quantity += 1;
                }
            } else {
                state.cartProduct.push({ ...action.payload, quantity: 1 });
            }
        },

        increaseQuantity: (state, action) => {
            const existingProduct = state.cartProduct.find(
                (item) => item.id === action.payload
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.cartProduct.find(
                (item) => item.id === action.payload
            );

            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            } else if (existingProduct && existingProduct.quantity === 1) {
                state.cartProduct = state.cartProduct.filter(
                    (item) => item.id !== action.payload
                );
            }
        },

        removeProduct: (state, action) => {
            state.cartProduct = state.cartProduct.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeProduct } =
    cartSlice.actions;

export default cartSlice.reducer;
