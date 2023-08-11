import { createSlice } from '@reduxjs/toolkit'
import Emails from '../../Emails.json'

export const selectSlice = createSlice({
  name: 'select',
  initialState: {
    value: Array(Emails.length).fill(false)
  },
  reducers: {
    isSelected: (state, action) => {
      state.value[action.payload] = !state.value[action.payload]
    },
    selectAll: (state, action) => {
      state.value = Array(action.payload).fill(true)
    },
    resetSelect: (state, action) => {
      state.value = Array(action.payload).fill(false)
    }
  }
})

// Action creators are generated for each case reducer function
export const { isSelected, selectAll, resetSelect } = selectSlice.actions

export default selectSlice.reducer