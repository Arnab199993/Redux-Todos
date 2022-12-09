/// Specifically for api communication
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import config from '../config';
export const fetchImages = createAsyncThunk(
    'ai_thunk/fetchImages',
    async (data) => {

        const configAxios={
            "headers":{
                "Authorization":"Bearer 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"
            }
        }
       // An async function return a promise
        const res=await axios.post("https://api.openai.com/v1/images/generations",data,configAxios);
        return res;
      
    }
  )