import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import BrushIcon from '@mui/icons-material/Brush';
import Avatar from '@mui/material/Avatar';
import { useSelector,useDispatch } from 'react-redux';
import {deleteTodo} from "../slices/todo";
import moment from 'moment';







const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
const Show = (props) => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const dispatch=useDispatch();

    const deleteData=(id)=>{
      //debugger;
      dispatch(deleteTodo(id));

    }

    const checkIfDateISPAssed=(date)=>{

     // moment() --->it will provide you current date and time


     return moment().diff(date, 'days')>0 ?true :false;


    }

    const todo=useSelector(state=>state.todo)
  return (

<Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List dense={dense}>

              {todo.todos.map((ele,i)=>(
                <ListItem
                key={ele.id}
                secondaryAction={
                  <>  <IconButton edge="end" aria-label="delete"  onClick={()=>deleteData(i)}>
                  <DeleteIcon />
                </IconButton>
                  <IconButton edge="end" aria-label="delete"  onClick={()=>props.handleModalOpen(ele)}>
                  <BrushIcon />
                </IconButton></>
                
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
              
                </ListItemAvatar>
                <ListItemText
               
                  primary={checkIfDateISPAssed(ele.date)?`${ele.name} -Due Date PAssed`:ele.name}
                  secondary={secondary ? 'Secondary text' : <span style={{ textDecoration: ele.isCompleted? 'line-through': 'none'}}
                  >{ele.date}</span>}
                />
              </ListItem>

              ))}
            
             
        
            </List>
          </Demo>
        </Grid>
  )
}

export default Show