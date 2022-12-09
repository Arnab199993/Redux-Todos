import { createSlice } from '@reduxjs/toolkit'
import { fetchImages } from '../thunks/ai_thunk';

const initialState = {
    images:[],
    loading:false

}

const AiSlice=createSlice({
    name:"Aislice",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchImages.fulfilled,(state,action)=>{
            state.images=action.payload.data.data
            state.loading=false;


        });
        builder.addCase(fetchImages.rejected,(state)=>{
            state.loading=false;

        });

        builder.addCase(fetchImages.pending,(state)=>{
            state.loading=true;

        });

    }

})

export default AiSlice.reducer;