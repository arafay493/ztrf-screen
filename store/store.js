import { configureStore } from '@reduxjs/toolkit'
import setBackgroundImage from './Slices/BgSlise'
export const store = configureStore({
  reducer: {
    setBg: setBackgroundImage
  },
})