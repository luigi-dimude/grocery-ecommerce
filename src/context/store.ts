import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import nftReducer from './nftSlice'
import searchProductReducer from './searchProductSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    nft: nftReducer,
    searchProducts: searchProductReducer
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch