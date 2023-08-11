import { createSlice } from '@reduxjs/toolkit'
import Emails from '../../Emails.json'

export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    value: Emails
  },
  reducers: {
    deleteEmail: (state, action) => {
        action.payload.forEach( (x, index) => {
            if(x){
                state.value.splice(index, 1)
            }
        })
    }
  }
})

// Action creators are generated for each case reducer function
export const { deleteEmail } = emailSlice.actions

export default emailSlice.reducer