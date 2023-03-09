import { CardItemType } from "../redux/cardSlice"

export const CalcTotalPrice = (items: CardItemType[]) => {
    return items.reduce((price: number, obj: CardItemType) => obj.price * obj.count + price, 0)
}
export const CalcTotalCount = (items: CardItemType[]) => {
    return items.reduce((count: number, obj: CardItemType) => obj.count + count, 0)
}