import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setText: (state, action) => {
      const { text } = action.payload;
      state.text = text;
    },
  },
});

export const { setText } = userSlice.actions;

export default userSlice.reducer;
