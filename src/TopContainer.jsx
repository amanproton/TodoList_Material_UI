import react from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import BottomContainer from './BottomContainer';
import Typography from '@mui/material/Typography';



import './temp.css'
import { useState } from 'react';



const TopContainer = () => {


    const [taskList, updateTaskList] = useState([]);
    const [totaltasks, updateTotalTasks] = useState(0);


    const addTask = () => {
        if (document.getElementById('agog').value.trim() != "") {
            updateTaskList([document.getElementById('agog').value]);
            updateTotalTasks((prevvalue)=>{
                return prevvalue+1
            })
        }
        document.getElementById('agog').value = "";
    }

    return (
        <>
            <div style={{ margin: "0.5rem auto 0 auto", width: "max-content", textAlign: "center" }}>
                <Typography style={{ color: "#fff", "margin": "1rem 0 0 0" }} variant="h5" component="h5">
                    {totaltasks} Tasks(s)
                </Typography>
            </div>

            <div id="topContainer">

                <div>
                    <TextField id="agog" autoFocus InputLabelProps={{ className: "customInput" }} sx={
                        {
                            input: { color: '#fff' },
                            ":after": { borderBottom: "2px solid red !important", color: "red !important", backgroundColor: "red !important" },
                            ":before": { borderBottom: "2px solid red !important", color: "red !important", backgroundColor: "red !important" }
                        }} label="New Task" variant="standard" />
                </div>

                <Fab onClick={addTask} style={{ "backgroundColor": "#fff", textTransform: "capitalize" }} size='small' color="white" aria-label="edit">
                    <AddIcon />
                </Fab>

            </div>


            <BottomContainer values={taskList} />
        </>
    )

}


export default TopContainer;