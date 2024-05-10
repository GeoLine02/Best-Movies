import { createSlice } from "@reduxjs/toolkit"

interface IinitialSate {
    isLogedIn: boolean
}

const initialState : IinitialSate = {
    isLogedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {},
})


export const {}  = userSlice.actions;
export default userSlice.reducer