import { createSlice } from "@reduxjs/toolkit";


export const orderSlice = createSlice({
    name: "selectedOrder",
    initialState: {
        ordersy: [{
            id: "",
            title: "",
            
    }] },
    reducers: {
        getID: (state, action) => {
            state.ordersy.id = action.payload
        },
        getTitle: (state, action) => {
            state.ordersy.title = action.payload
        },
    },
    
})

export const { getID, getTitle } = orderSlice.actions;
export default orderSlice.reducer;