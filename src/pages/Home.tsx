import React from 'react'
import styles from '../styles/home.module.scss'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import { fetchPizzas, PizzaType } from '../redux/pizzaSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useAppDispatch } from '../redux/store'
import Search from '../components/Search'
import Loading from '../components/Loading'

const Home: React.FC  = () => {

  const dispatch = useAppDispatch()
  //pizzas | status
  const {items, status} = useSelector((state : RootState)  => state.pizzas)   

   //filters
  const {sort, categoryId, searchValue} = useSelector((state : RootState) => state.filter)

  //sortProperty
  const sortProperty = sort.sortProperty 

  //get pizzas
  const getPizzas = async() => { 
    const category = categoryId ? `category=${categoryId}` : ''
    dispatch(fetchPizzas({category, sortProperty, searchValue}))
  }

  //call getPizzas
  React.useEffect(() => {
    getPizzas()
  }, [categoryId, sort, searchValue])

  //skeletons
  const skeletons = [...Array(10)].map(() => <Loading/>)

  //pizzas
  const pizzas = items.map((obj : PizzaType, index) => <PizzaBlock {...obj} key={index}/>)

  return (
    <div className={styles.home}>
        <Search/>
        <div className={styles.home_header}>
          <Categories/>
          <Sort/>
        </div>
        <div className={styles.pizza_items}>
          {status == 'loading' ? skeletons : pizzas}
        </div>
    </div>
  )
}

export default Home