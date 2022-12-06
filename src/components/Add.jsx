import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import {handleemptyState} from "../slices/todo";
import { useDispatch,useSelector } from 'react-redux';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';





const Add = (props) => {
  const dispatch =useDispatch();
  const stateData=useSelector(state=>state.todo)

  // we are using local state to store the component data ,because this data is not reusable and we are just 

  // using it in Add component
  const [state,setState]=useState({
    name:"",
    date:moment().format("YYYY-MM-DD").toString()
  });

  const handleChange=(event)=>{
    //setState({...state,name:event.target.value});
    dispatch(handleemptyState({name:"name",value:event.target.value}));


  }


  const handleDateChange = (newValue) => {
    // newValue is a material ui date
  //  console.log(newValue.toString())
   //setState({...state,date:newValue});
   dispatch(handleemptyState({name:"date",value:moment(newValue.toString()).format("YYYY-MM-DD")}));

  };
  return (
    <div style={{marginLeft:"20px"}}>


<LocalizationProvider dateAdapter={AdapterDayjs}>
<Stack spacing={4}  style={{marginTop:"20px"}}>
<TextField id="outlined-basic" label="Todo" variant="outlined"  onChange={handleChange}/> <br></br>
<DesktopDatePicker
 

          label="End Date"
          inputFormat="YYYY-MM-DD"
          value={stateData.emptyState.date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        /> 
  </Stack>


</LocalizationProvider><br></br>


<Button variant="contained" style={{marginTop:"20px"}} onClick={()=>props.addtodoEvent(state)}>Add todo</Button>



    </div>
  )
}

export default Add