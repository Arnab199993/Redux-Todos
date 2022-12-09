import { configureStore } from '@reduxjs/toolkit'
import aireducer from "../slices/ai_slice";
export const store = configureStore({
  reducer: {
    aireducer
  },
})