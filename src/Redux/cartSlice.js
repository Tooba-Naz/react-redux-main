import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    fav:[],
    totalLike:0,
    totalquantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const find = state.items.findIndex(
        (t) => t.title === action.payload.title
      );
      if (find >= 0) {
        state.items[find].quantity += 1;
      } else {
        action.payload.quantity = 1;
        state.items.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      const { totalquantity, totalPrice } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { newPrice, quantity } = cartItem
          const itemTotal = newPrice * quantity;
          cartTotal.totalPrice += itemTotal
          cartTotal.totalquantity += quantity
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalquantity: 0
        }

      )
      state.totalPrice = parseInt(totalPrice.toFixed(2))
      state.totalquantity = totalquantity
    },
    removeCartItems: (state, action) => {
      state.items = [];
    },
    addItemToLike: (state, action) => {
      const find = state.fav.findIndex(
        (t) => t.title === action.payload.title
      );
      if (find >= 0) {
        state.fav[find].quantity += 1;
      } else {
        action.payload.quantity = 1;
        state.fav.push(action.payload);
      }
    },
    getLike: (state) => {
      const { totalLike} = state.fav.reduce(
        (cartTotal, cartItem) => {
          const { quantity } = cartItem
          cartTotal.totalLike += quantity
          return cartTotal;
        },
        {
          totalLike: 0
        }

      )
      state.totalLike = totalLike
    },
    removeLike: (state, action) => {
      state.fav = [];
    },
   
  },
});
export const { addItemToCart, getCartTotal,getLike, removeCartItems, moveAll, addItemToLike, removeLike } = cartSlice.actions;
export default cartSlice.reducer;