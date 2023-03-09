import React from 'react'
import logo from '../img/header/logo.png'
import styles from '../styles/header.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Header: React.FC = () => {

  const {totalCount, totalPrice} = useSelector((state : RootState) => state.card)

  return (
    <header className={styles.header}>

        <Link to='/'>
        <div className={styles.header_left}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.header_left__cont}>
                <h3>REACT PIZZA</h3>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </div>
        </Link>
        
        <Link to='/card'>
        <div className={styles.header_right}>
            <div className={styles.header_price}>{totalPrice} ₽</div>
            <div className={styles.hr}></div>
            <div className={styles.header_basket_count}>{totalCount}</div>
        </div>
        </Link>

    </header>
  )
}

export default Header