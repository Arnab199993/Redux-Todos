import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState={
    todos:[]

}

const todo=createSlice({
    name:"todo",
    initialState,
    reducers:{
        // this is an action
        addTodo:function(state,action){
            // object instead
            state.todos.push({name:action.payload,id:uuidv4()});

        },
        deleteTodo:function(state,action){
            // object instead
            state.todos=state.todos.filter(ele=>ele.id!=action.payload)

        }
    }

})

export const {addTodo,deleteTodo}=todo.actions

export default todo.reducer