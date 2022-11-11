import { createSlice } from '@reduxjs/toolkit'
import { MonyType } from '../../model/MonyType';

const initialState: MonyType[] = [
  { id: 1, type: 'income', title: "حقوق ", price: 123000 },
  { id: 2, type: "expense", title: "خرید گوشت ", price: 234345345 },
  { id: 3, type: 'income', title: " هدیه", price: 123000 },
]



export const MonysSice = createSlice({
  name: 'Mony',
  initialState,
  reducers: {
    increment: (state) => {


    },
    decrement: (state) => {

    },
    incrementByAmount: (state, action) => {

    },
  },
})


export const { increment, decrement, incrementByAmount } = MonysSice.actions

export default MonysSice.reducer