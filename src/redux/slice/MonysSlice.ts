import { createSlice } from '@reduxjs/toolkit'
import { MonyType } from '../../model/MonyType';

const initialState: MonyType[] = [
  { id: 1, type: 'income', title: "حقوق ", price: "123000" },
  { id: 2, type: "expense", title: "خرید گوشت ", price: "1000" },
  { id: 3, type: 'income', title: " هدیه", price: "123000" },
]



export const MonysSice = createSlice({
  name: 'Mony',
  initialState,
  reducers: {
    Addmony: (state, action) => {
      // payload {}
      state.push(action.payload)
    },
    decrement: (state) => {

    },
    incrementByAmount: (state, action) => {

    },
  },
})


export const { Addmony, decrement, incrementByAmount } = MonysSice.actions

export default MonysSice.reducer