import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
  data: any
}

const initialState: ProductState = {
  data: [{name:"a"},{name:"b"}],
}

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data= []
    },
    decrement: (state) => {
      state.data = []
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.data = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ProductSlice.actions


// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


export default ProductSlice.reducer