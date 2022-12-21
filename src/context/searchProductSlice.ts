import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  search: string
}

const initialState: InitialState = {
  search: ''
}

export const searchProductSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addToSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToSearch } = searchProductSlice.actions

export default searchProductSlice.reducer