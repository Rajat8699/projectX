import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
// import axiosInstance from '../../utils/axios-interceptors';

export const getTests = createAsyncThunk(
    'tests/getTests', async ()=>{
        const {data}= await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data
        }
)


const testSlice = createSlice({
    name:'tests',
    initialState:{
        list:[],
        status:null,
    },
    extraReducers:{
        [getTests.pending]:(state,action)=>{
            state.status = 'loading'
        },
        [getTests.fulfilled]:(state,{payload})=>{
            state.list = payload
            state.status = 'success'
        },
        [getTests.rejected]:(state,action)=>{
            state.status = 'failed'
        },

    }
})
export default testSlice.reducer