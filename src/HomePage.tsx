import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "./redux/index";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { addUser } from "./redux/IssueReducer";
import { fetchIssues } from "./redux/GithubIssueReducer";



const HomePage = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const [textInput, setTextInput] = useState('');
    const githubIssueList = useSelector((state: RootState) => state.githubIssue.issues)
    const loading = useSelector((state: RootState) => state.githubIssue.loading);
    const error = useSelector((state: RootState) => state.githubIssue.error);
    useEffect(() => {
        dispatch(fetchIssues())
      }, [dispatch]);
    
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    const handleTextInputChange = (e:any) => {
        setTextInput(e.target.value);
    };
    const handleClick = () => {
        console.log(textInput)
        // dispatch(addUser(textInput))
    }
    return(
        <div className="home_page">
            <Box sx={{ml: '5rem', mr: '5rem'}}>
                <Typography variant="h4" sx={{textAlign: 'center'}}>
                    Project Issue Tracker
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <Stack spacing={2}>
                        <Typography variant="h5">
                            Add new issue
                        </Typography>
                        <TextField 
                        id="outlined-basic" 
                        label="Title" 
                        variant="outlined" 
                        onChange={handleTextInputChange}
                        value={textInput}
                        />
                        <Button variant="contained" onClick={handleClick}>Submit</Button>
                    </Stack>
                </Box>
                <Box sx={{ml: '1rem', mt: '3rem'}}>
                    <Typography variant="h5" >
                        Opened issue
                    </Typography>
                    {
                        githubIssueList?.map((issue : string, key : number) => {
                            return(
                                <ProjectCard issueTitle={issue} key={key} />
                            )
                        })
                    }
                </Box>
            </Box>
        </div>
    )
}
export default HomePage;
