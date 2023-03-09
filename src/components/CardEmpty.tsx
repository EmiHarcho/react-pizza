import React from 'react'
import styles from '../styles/cardEmpty.module.scss'
import cardEmptyImg from '../img/card/cardEmpty.png'
import { Link } from 'react-router-dom'

const CardEmpty = () => {
  return (
    <div className={styles.card_empty}>
        <h1>Корзина пустая</h1>
        <p>Вероятней всего, вы не заказывали ещё пиццу<br/>.Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
        <img src={cardEmptyImg} alt="cardEmptyImg" />
        <button><Link to='/'>Вернуться назад</Link></button>
    </div>
  )
}

export default CardEmpty