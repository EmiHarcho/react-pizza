import { createSlice } from "@reduxjs/toolkit";
import { getCardFromLS } from "../utils/getCardFromLS";
import { CalcTotalPrice, CalcTotalCount} from "../utils/totalCalc";

export type CardItemType = {
    id : number,
    name : string
    price : number,
    imageUrl : string,
    types : number[],
    size : number,
    rating : number,
    category : number,
    count : number
}

interface CardState {
    cardItems : CardItemType[],
    totalCount : number,
    totalPrice : number
}

const initialState : CardState = getCardFromLS()

const calcTotal = (state : CardState) => {
    state.totalCount = CalcTotalCount(state.cardItems)
    state.totalPrice = CalcTotalPrice(state.cardItems)
}

const cardSlice = createSlice({
    name : 'card',
    initialState,
    reducers : {
        addItems(state, action){
            const currentItem = state.cardItems.find(item => item.id === action.payload.id)
            if(currentItem) {
                currentItem.count ++
            }

            else {state.cardItems.push({...action.payload})}
            calcTotal(state)
        },
        removeItem(state, action){
            state.cardItems = state.cardItems.filter(item => item.id !== action.payload)
            calcTotal(state)
        },
        minusItem(state, action){
            const currentItem = state.cardItems.find(item => item.id === action.payload)
            if(currentItem){
                if(currentItem.count > 1){
                    currentItem.count --
                    calcTotal(state)
                    state.totalCount --
                }
            }

        },
        clearCard(state){
            state.cardItems = []
            state.totalCount = 0
            state.totalPrice = 0
        }
 
    }
})
export default cardSlice.reducer
export const {addItems, removeItem, minusItem, clearCard} = cardSlice.actions