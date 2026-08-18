import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState:{
    items:[]
  },
  reducers: {
    addItem: (state,action) => {
      state.items.push();
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer