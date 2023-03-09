import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type sortType = {
    name : string,
    sortProperty : string
}

type FilterSliceState = {
    searchValue : string
    categoryId : number,
    sort : sortType
}

const initialState : FilterSliceState = {
    searchValue : '',
    categoryId : 0,
    sort : {
        name : 'популярности',
        sortProperty: 'rating'
    }
}

const filterSlice = createSlice({
    name : 'filter',
    initialState,
    reducers : {
        setSearchValue(state, action : PayloadAction<string>){
            state.searchValue = action.payload
        },
        setCategoryId(state, action : PayloadAction<number>){
            state.categoryId = action.payload       
        },
        setSort(state, action : PayloadAction<sortType>){
            state.sort = action.payload 
        }
    }
})
export const {setSearchValue, setCategoryId, setSort} = filterSlice.actions
export default filterSlice.reducer