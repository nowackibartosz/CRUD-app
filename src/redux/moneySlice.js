import {createSlice} from "@reduxjs/toolkit"

export const moneySlice=createSlice({
    name: "money",
    initialState: { value: 0},
    reducers: {
        withdrawMoney: (state)=>{
            state.value -= 0;
        },
        depositMoney: (state)=>{
            state.value += 0;
        },
       
    }
})
export const {withdrawMoney, depositMoney}=moneySlice.actions;
export default moneySlice.reducer;
