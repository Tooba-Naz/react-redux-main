import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
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
    getCartTotal:(state)=>{
        const {totalquantity ,totalPrice} =state.items.reduce(
            (cartTotal , cartItem) =>{
                console.log(" cartTotal" , cartTotal);
                console.log(" cartItem" , cartItem);
                const {newPrice ,quantity} = cartItem
                console.log(newPrice , quantity);
                const itemTotal = newPrice*quantity;
                cartTotal.totalPrice += itemTotal
                cartTotal.totalquantity += quantity
                return cartTotal; 
            },
            {totalPrice : 0,
             totalquantity:0
            }
        
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalquantity = totalquantity
    },
    removeCartItems: (state, action) => {
        state.items = [];
    },
    moveAll:(state,action)=>{
      state.items = action.payload;
    },
    addItemToLike: (state, action) => {
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
  },
});
export const { addItemToCart , getCartTotal ,removeCartItems  , moveAll} = cartSlice.actions;
export default cartSlice.reducer;