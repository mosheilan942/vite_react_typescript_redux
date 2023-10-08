// Part 1
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userDetiles } from "./index";

// Part 2
export interface IssueInitialState {
    projectIssues: userDetiles[]
}
const initialState: IssueInitialState = {
    projectIssues: []
}

// Part 3
export const issueSlice = createSlice({
    name: 'issue',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<userDetiles>) => {
            state.projectIssues = [...state.projectIssues, action.payload]
        }
    }
})

// Part 4
export const { addUser } = issueSlice.actions
export default issueSlice.reducer
