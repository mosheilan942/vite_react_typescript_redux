import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userDetiles } from "./index";


export interface UserInitialState {
    projectUser: userDetiles[]
}
const initialState: UserInitialState = {
    projectUser: []
}

export const userSlice = createSlice({
    name: 'issue',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<userDetiles>) => {
            state.projectUser = [...state.projectUser, action.payload]
        }
    }
})


export default userSlice.reducer;
