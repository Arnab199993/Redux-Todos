import React from 'react'
import Add from '../components/Add'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Show from '../components/Show';
import {addTodo} from "../slices/todo";
import { useDispatch,useSelector } from 'react-redux';



export const Home = () => {
const dispatch=useDispatch();

const addtodoEvent=(data)=>{
  dispatch(addTodo(data));

}

  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:"100px"}}>
    <Grid container spacing={2}>
      <Grid xs={6}>
      <Add addtodoEvent={addtodoEvent}/>
      </Grid>
      <Grid xs={6}>

        <Show/>
  
      </Grid>
    
    
    </Grid>
  </Box>
   
  )
}