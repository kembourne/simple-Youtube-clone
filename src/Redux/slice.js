import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
const dataSlice = createSlice({
    name: "shopping",
    initialState: {
        category: "New",
        searchTerm:"",
        pageName:"",

    },
    reducers: {
        isLogin: (state, action) => {
            state.category = action.payload;
        },
       search:(state,action)=>{
state.searchTerm=action.payload;
       },
       page:(state,action)=>{
        state.pageName=action.payload;
               }
    }

})
export const { isLogin ,search,page} = dataSlice.actions;
export default dataSlice;