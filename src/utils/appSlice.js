import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state,action) =>{
            state.isMenuOpen =!state.isMenuOpen;
        }
    }
})

export const {toggleMenu} = appslice.actions

export default appslice.reducer;