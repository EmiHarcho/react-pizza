import React from 'react'
import styles from '../styles/cardItem.module.scss'
import { CardItemType } from '../redux/cardSlice'
import { removeItem, minusItem, addItems} from '../redux/cardSlice'
import { useDispatch } from 'react-redux'


const CardItem: React.FC<CardItemType> = ({id, name, price, imageUrl, types, size, rating, category, count}) => {

  const dispatch = useDispatch()

  const onRemove = () => {
    dispatch(removeItem(id))
  }
  const onMinusItem = () => {
    dispatch(minusItem(id))
  }
  const onAddItem = () => {
    dispatch(addItems({name, price, id, imageUrl, size, types, count}))
  }

  
  return (
    <div className={styles.card_item}>

        <div className={styles.content_left}>
          <img src={imageUrl} alt="pizza_block_img"/>
          <div className={styles.item_info}>
              <h3>{name}</h3>
              <p>{size} см.</p>
          </div>
        </div>

        <div className={styles.counter}>
          <div className={styles.delete_btn} onClick={onMinusItem}>-</div>
          <div className={styles.count}>{count}</div>
          <div className={styles.added_btn} onClick={onAddItem}>+</div>
        </div>

        <h2 className={styles.price}>{price} ₽</h2>

        <div className={styles.clear_btn} onClick={onRemove}>x</div>

    </div>
  )
}

export default CardItem