import {createSlice} from "@reduxjs/toolkit"

export const moneySlice=createSlice({
    name: "money",
    initialState: { value: 0},
    reducers: {
        WithdrawMoney: (state)=>{
            state.value -= 0;
        },
        DepositMoney: (state)=>{
            state.value += 0;
        },
       
    }
})
export const {showMoney}=moneySlice.actions;
export default moneySlice.reducer;
