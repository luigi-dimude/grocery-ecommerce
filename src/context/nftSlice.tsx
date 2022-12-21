import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NFTProductType } from '../data/products'

type filterType = {
  search: string;
  status: string;
}

type InitialState = {
  all_products: NFTProductType[];
  filtered_products: NFTProductType[];
  sort: string;
  filters: filterType;
}

const initialState: InitialState = {
  all_products: [],
  filtered_products: [],
  sort: 'highest_price',
  filters: {
    status: 'available',
    search: ''
  }
}

type FilterPayload = {
  name: string
  value: string
}

export const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    load_products: (state, action: PayloadAction<NFTProductType[]>) => {
      state.all_products = action.payload
      state.filtered_products = action.payload
    },
    sort: (state) => {
      let { sort } = state
      let tempProducts = [...state.filtered_products]

      if (sort) {

        if (sort === 'lowest_price') {
          tempProducts = tempProducts.sort((a, b) => a.price - b.price)
        }

        else if (sort === 'highest_price') {
          tempProducts = tempProducts.sort((a, b) => b.price - a.price)
        }
        else
          throw new Error('Sort type not found')
      }

      state.filtered_products = tempProducts

    },
    updateSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    filter: (state) => {
      let tempProducts = [...state.all_products]
      const { status, search } = state.filters;

      switch (status) {
        case 'available':
          tempProducts = tempProducts.filter(prod => prod.primes > 0);
          break;
        case 'soldOut':
          tempProducts = tempProducts.filter(prod => prod.primes <= 0);
          break;
        case 'all':
          break;
        default:
          throw new Error('Invalid status value');
      }

      if (search) {
        tempProducts = tempProducts.filter(prod => prod.nft_id.startsWith('#' + search) || prod.nft_id.startsWith(search))
      }
      state.filtered_products = tempProducts
    },
    updateFilters: (state, action: PayloadAction<FilterPayload>) => {
      const { name, value } = action.payload
      if (name === 'status')
        state.filters.status = value

      if (name === 'search')
        state.filters.search = value

    },
  },
})

// Action creators are generated for each case reducer function
export const { load_products, filter, updateFilters, sort, updateSort } = nftSlice.actions

export default nftSlice.reducer