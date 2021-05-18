import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    userList:[],
    user:{}
}


const slice = createSlice({
    name:'users',
    initialState,
    reducers:{
        getUser:(state,action)=>{
            state.user = state.userList[action.payload]
        }
    }
})

export const {
    getUser
}=slice.actions

export default slice.reducer