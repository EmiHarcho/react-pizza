import { configureStore } from '@reduxjs/toolkit/'
import { useDispatch } from 'react-redux'
import pizzas from './pizzaSlice'
import card from './cardSlice'
import filter from './filterSlice'

export const store = configureStore({
    reducer : {
        pizzas,
        card,
        filter
    }
})
export type RootState = ReturnType <typeof store.getState>

type typeDispath = typeof store.dispatch
export const useAppDispatch = () => useDispatch<typeDispath>()