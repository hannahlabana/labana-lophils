import { configureStore } from '@reduxjs/toolkit'
import emailReducer from '../features/email/emailSlice'
import selectReducer from '../features/select/selectSlice'


export default configureStore({
  reducer: {
    email: emailReducer,
    select: selectReducer
  }
})