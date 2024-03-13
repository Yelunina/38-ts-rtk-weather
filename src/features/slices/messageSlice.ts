import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {
        putMessage: (state, action) => {
            return action.payload;
        }
    }
})

export const {putMessage} = messageSlice.actions
export default messageSlice.reducer