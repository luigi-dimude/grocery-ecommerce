import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../data/products'
import { discountedPrice } from '../utils/helpers'

interface CartProduct extends ProductType {
  amount: number
}
type InitialState = {
  products: CartProduct[]
  total_amount: number
  total_quantity: number
  total_prime_amount: number
}


const initialState: InitialState = {
  products: [],
  total_amount: 0,
  total_quantity: 0,
  total_prime_amount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const payloadId = action.payload.id
      const findProduct = state.products.find(product => product.id === payloadId)

      if (findProduct) {
        let updatedProduct: Array<CartProduct> = []

        state.products.forEach(element => {
          if (element.id !== payloadId) {
            updatedProduct.push(element)
          }
          else {
            updatedProduct.push({ ...element, amount: action.payload.amount })
          }
        });
        state.products = updatedProduct
      }
      else
        state.products.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.products = state.products.filter((item) => item.id !== itemId);
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      let prime_amount_total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * discountedPrice(item.price, item.discount);
        prime_amount_total += (item.amount * discountedPrice(item.price, item.discount)) - item.prime_discount
      });
      state.total_amount = total;
      state.total_quantity = amount;
      state.total_prime_amount = prime_amount_total;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, calculateTotals } = cartSlice.actions

export default cartSlice.reducer