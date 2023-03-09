import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import styles from '../styles/card.module.scss'
import CardItem from '../components/CardItem'
import { clearCard } from '../redux/cardSlice'
import CardEmpty from '../components/CardEmpty'
import { Link } from 'react-router-dom'


const Card: React.FC = () => {

  const dispatch = useDispatch()

  const {cardItems, totalCount, totalPrice} = useSelector((state : RootState) => state.card)

  React.useEffect(() => {
      const json = JSON.stringify(cardItems) 
      localStorage.setItem('card', json) 
  }, [cardItems])

  const clearItems = () => {
    dispatch(clearCard())
  }
  
  return (
    <div className={styles.card}>
      {
      cardItems.length 
      ? <>
          <div className={styles.card_top}>
              <h1>Корзина</h1>
              <div className={styles.clear} onClick={clearItems}>Очистить корзину</div>
          </div>
      
          {cardItems.map((item, index) => <CardItem {...item}/>)}
      
          <div className={styles.totalInfo}>
              <div className={styles.totalCount}>Всего пицц: <span>{totalCount} шт.</span></div>
              <div className={styles.totalPrice}>Сумма заказа: <span>{totalPrice} ₽</span></div>
          </div>
      
          <div className={styles.card_footer}>
            <button className={styles.come_back_btn}><Link to='/'>Вернуться назад</Link></button>
            <button className={styles.pay_btn}>Оплатить сейчас</button>
          </div>
        </>
      :<CardEmpty/>
      }
    </div>    
  )
}

export default Card