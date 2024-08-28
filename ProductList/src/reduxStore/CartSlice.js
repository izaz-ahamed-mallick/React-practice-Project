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
            state.cartProduct = state.cartProduct.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        },
        decreaseQuantity: (state, action) => {
            state.cartProduct = state.cartProduct
                .map((item) => {
                    if (item.id === action.payload && item.quantity > 0) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0);
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
