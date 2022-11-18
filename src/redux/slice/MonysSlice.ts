import { createSlice } from '@reduxjs/toolkit'
import { MonyType } from '../../model/MonyType';

const initialState: MonyType[] = [
  { id: 1, type: 'income', title: "حقوق ", price: "123000000" },
  { id: 2, type: "expense", title: "خرید گوشت ", price: "1000" },
  { id: 3, type: 'income', title: " هدیه", price: "12300000" },
  { id: 3, type: 'expense', title: " خرید شامپو", price: "123000" },
]



export const MonysSice = createSlice({
  name: 'Mony',
  initialState,
  reducers: {
    Addmony: (state, action) => {
      const { payload } = action
      // payload {}
      state.push(payload)
    },
    deletemony: (state,action) => {
      // payload id
      const { payload } = action
      const index=state.findIndex(state=> state.id === payload.id)
      state.splice(index,1)
    },
    updatemony: (state, action) => {
      const { payload } = action
      // payload {}
      const index=state.findIndex(state=>state.id === payload.id)
      state[index]=payload
    },
  },
})


export const { Addmony, deletemony, updatemony } = MonysSice.actions

export default MonysSice.reducer