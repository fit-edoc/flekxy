import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalAmount: 0,
    discount: 0, // discounted amount
    coupon: null, // store the active coupon code
  },
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
      const numericPrice = parseFloat(String(action.payload.price).replace(/[^0-9.]/g, ''));
    
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          price: isNaN(numericPrice) ? 0 : numericPrice,
          quantity: 1,
        });
      }
      cartSlice.caseReducers.calculateTotalPrice(state);
    }
    
,    
    incrementQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
      cartSlice.caseReducers.calculateTotalPrice(state);
    },
    decrementQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
      }
      cartSlice.caseReducers.calculateTotalPrice(state);
    }
,    
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      cartSlice.caseReducers.calculateTotalPrice(state);
    },
    calculateTotalPrice: (state) => {
      state.totalAmount = state.cartItems.reduce((acc, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        return acc + price * quantity;
      }, 0);
    }
,    
    applyCoupon(state, action) {
      const code = action.payload;
    
      // Example coupon codes
      const coupons = {
        "SAVE10": 0.10, // 10% off
        "SAVE50": 0.50, // 50% off
      };
    
      if (coupons[code]) {
        const discountValue = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * coupons[code];
        state.discount = discountValue;
        state.coupon = code;
      } else {
        state.discount = 0;
        state.coupon = null;
      }
    
      // Recalculate total after applying discount
      cartSlice.caseReducers.calculateTotalPrice(state);
    },
    
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, calculateTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
