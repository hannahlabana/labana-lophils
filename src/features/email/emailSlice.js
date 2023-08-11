import { createSlice } from '@reduxjs/toolkit'
import Emails from '../../Emails.json'

export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    value: Emails
  },
  reducers: {
    deleteEmail: (state, action) => {
      let x      
      for(x = action.payload.length; x >= 0; x--){
        if(action.payload[x]){
          state.value.splice(x, 1)
        }
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { deleteEmail } = emailSlice.actions

export default emailSlice.reducer