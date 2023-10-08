import React, { useRef } from 'react'
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "./redux/index";
import { addUser } from "./redux/IssueReducer";
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';
import EditUser from "./EditUser";


function LogIn() {
    const dispatch: AppDispatch = useAppDispatch();
    const usernameref = useRef<HTMLInputElement>(null)
    const passwordref = useRef<HTMLInputElement>(null)
    const users = useSelector((state: RootState) => state.issue.projectIssues);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()
        if (usernameref.current && passwordref.current) {
            console.log(usernameref.current.value);
            console.log(passwordref.current.value);
            const textInput = {
                username: usernameref.current.value,
                password: passwordref.current.value,
            }
            dispatch(addUser(textInput))
            console.log(users);
        }}

        return (
            <>
            <EditUser/>
                <form>
                    <input ref={usernameref} placeholder='user name' />
                    <input ref={passwordref} placeholder='password' />
                    <button onClick={(e) => handleClick(e)}>add user</button>
                </form>
                {users.map((user) => {
                    <div>{user.username}</div>
                })}
               
            </>

        )
    }

    export default LogIn