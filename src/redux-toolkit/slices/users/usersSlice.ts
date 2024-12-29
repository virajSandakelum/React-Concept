import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Viraj Sandakelum' },
    { id: '1', name: 'Kamal Gunathilaka' },
    { id: '2', name: 'Sunil Perera' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;