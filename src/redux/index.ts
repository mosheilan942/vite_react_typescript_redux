
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import IssueReducer from "./IssueReducer";
import GithubIssueReducer from "./GithubIssueReducer";
export const store = configureStore({
    reducer: {
        issue: IssueReducer,
        githubIssue: GithubIssueReducer
    }
})
export type userDetiles = {
    username : string,
    password : string,
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
