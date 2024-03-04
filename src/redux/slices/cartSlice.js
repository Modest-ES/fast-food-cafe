import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalAmount: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const foundItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.option === action.payload.option,
      );
      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalAmount = state.items.reduce((count, obj) => {
        return obj.count + count;
      }, 0);
    },
    minusItem(state, action) {
      const foundItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.option === action.payload.option,
      );
      if (foundItem && foundItem.count > 1) {
        foundItem.count--;
        state.totalAmount--;
        state.totalPrice = state.totalPrice - foundItem.price;
      }
    },
    deleteItem(state, action) {
      const foundItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.option === action.payload.option,
      );
      state.totalAmount = state.totalAmount - foundItem.count;
      state.totalPrice = state.totalPrice - foundItem.price * foundItem.count;
      state.items = state.items.filter((obj) => {
        return obj.id !== action.payload.id || obj.option !== action.payload.option;
      });
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
