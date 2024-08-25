import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bg: "",
};

export const setBackgroundImage = createSlice({
  name: "setBackgroundImage",
  initialState,
  reducers: {
    setBg: (state, action) => {
      // console.log({...state})
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBg } = setBackgroundImage.actions;

export default setBackgroundImage.reducer;
