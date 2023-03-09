import {createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type paramsType = {
    [key : string] : string
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async(params : paramsType) => {
    const {category, sortProperty, searchValue} = params
    const {data} = await axios.get<PizzaType[]>(`https://63c841aae52516043f4f1a46.mockapi.io/items?${category}&sortBy=${sortProperty}&search=${searchValue}`)
    console.log(searchValue);
    
    return data as PizzaType[]
    
})
export type PizzaType = {
    id : number,
    name : string
    price : number,
    imageUrl : string,
    types : number[],
    sizes : number[],
    rating : number,
    category : number,
}
enum Status {
    LOADING = 'loading',
    SUCCESS = 'succes',
    ERROR = 'error'
}
type InitialState = {
    items : PizzaType[],
    status : Status
}
const initialState: InitialState = {
    items : [],
    status : Status.LOADING
}
const PizzaSlice = createSlice({
    name : 'pizza',
    initialState,
    reducers : {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
          state.status = Status.LOADING;
          state.items = [];
        });
    
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        });
    
        builder.addCase(fetchPizzas.rejected, (state) => {
          state.status = Status.ERROR;
          state.items = [];
        });
    },
})

export default PizzaSlice.reducer