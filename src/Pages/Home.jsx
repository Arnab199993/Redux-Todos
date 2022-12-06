import React from 'react'
import Add from '../components/Add'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Show from '../components/Show';
import {addTodo, handlePopupEditData} from "../slices/todo";
import { useDispatch,useSelector } from 'react-redux';
import EditModal from '../components/Editmodal';



export const Home = () => {
const dispatch=useDispatch();
const [open, setOpen] = React.useState(false);


const addtodoEvent=(data)=>{
  dispatch(addTodo(data));

}
const handleModalOpen = (data) => {

dispatch(handlePopupEditData(data));  
  setOpen(true);

  // set up data in redux store --

}
const handleClose = () => setOpen(false);



  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:"100px"}}>
    <Grid container spacing={2}>
      <Grid xs={6}>
      <Add addtodoEvent={addtodoEvent} />
      </Grid>
      <Grid xs={6}>

        <Show handleModalOpen={handleModalOpen} handleClose={handleClose}/>
        <EditModal open={open} handleClose={handleClose}/>
  
      </Grid>
    
    
    </Grid>
  </Box>
   
  )
}