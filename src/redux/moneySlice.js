import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: { value: 5 },
  reducers: {
    withdrawMoney: (state, action) => {
      state.value -= Number(action.payload);
    },
    depositMoney: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});
export const { withdrawMoney, depositMoney } = moneySlice.actions;
export default moneySlice.reducer;


