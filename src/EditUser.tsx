import React, { useRef, useState } from 'react'
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch, userDetiles } from "./redux/index";
import { addUser } from "./redux/IssueReducer";
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';

function EditUser() {
    const storgeUsers = useSelector((state: RootState) => state.issue.projectIssues);
    return (
        <>
            <h1>Users</h1>
            {
                storgeUsers?.map((user: userDetiles, key: number) => {
                    return (
                        <div key={key} > name: {user.username} password: {user.password}</div>
                    )
                })
            }
        </>
    )
}

export default EditUser