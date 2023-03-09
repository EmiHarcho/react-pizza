import { CardItemType } from "../redux/cardSlice"
import { CalcTotalCount, CalcTotalPrice } from "./totalCalc"

export const getCardFromLS = () => {
    const data = localStorage.getItem('card')
    const cardItems = data ? JSON.parse(data) as CardItemType[] : [] 

    const totalCount = CalcTotalCount(cardItems)
    const totalPrice = CalcTotalPrice(cardItems)

    return{
        cardItems, 
        totalCount,
        totalPrice
    }
}