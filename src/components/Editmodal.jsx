import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import {EditData, handleemptyState} from "../slices/todo";
import { useDispatch,useSelector } from 'react-redux';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal(props) {
  const todoData=useSelector(state=>state.todo)
  const dispatch=useDispatch();

  const [state,setState]=useState({
    name:"",
    date:""
  });

  const handleChange=(event)=>{
    setState({...state,name:event.target.value});
   // dispatch(handleemptyState({name:"name",value:event.target.value}));


  }

  const handleDateChange = (newValue) => {
    // newValue is a material ui date
   /// console.log(newValue.prototype.getDate())

// try to edit the date

   setState({...state,date:moment(newValue).format("YYYY-MM-DD").toString()});
   //dispatch(handleemptyState({name:"date",value:moment(newValue.toString()).format("YYYY-MM-DD")}));

  };

  const ediDirectlyIntheStore=()=>{
    state.id=todoData.editData.id
    dispatch(EditData(state))

  }

  return (
    <div>
      <Button >Open modal</Button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{marginLeft:"20px"}}>


<LocalizationProvider dateAdapter={AdapterDayjs}>
<Stack spacing={4}  style={{marginTop:"20px"}}>
<TextField id="outlined-basic" label="Todo" variant="outlined" value={state.name.length>0?state.name:todoData.editData.name}  onChange={handleChange}/> <br></br>
<DesktopDatePicker
 

          label="End Date"
          inputFormat="YYYY-MM-DD"
          value={state.date.length>0?state.date.length:todoData.editData.date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        /> 
  </Stack>


</LocalizationProvider><br></br>


<Button variant="contained" style={{marginTop:"20px"}} onClick={ediDirectlyIntheStore}>Edit Todo</Button>



    </div>
        </Box>
      </Modal>
    </div>
  );
}