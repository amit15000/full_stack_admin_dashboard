import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
  mode: "dark",
};

export const globalSlice = createSlice({
  name: "Global",
  initialState: initialThemeState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
