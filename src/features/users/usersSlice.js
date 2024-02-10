import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Anonymous' },
    { id: '1', name: 'Shar' },
    { id: '2', name: 'Kai' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer