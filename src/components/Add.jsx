import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Add = (props) => {
  const [state,setState]=useState("");

  const handleChange=(event)=>{
    setState(event.target.value);


  }
  return (
    <div>

<TextField id="outlined-basic" label="Todo" variant="outlined"  onChange={handleChange}/> <br></br>
<Button variant="contained" style={{marginTop:"20px"}} onClick={()=>props.addtodoEvent(state)}>Add todo</Button>



    </div>
  )
}

export default Add