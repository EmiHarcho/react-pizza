import React from 'react' 
import styles from '../styles/pizzaBlock.module.scss'
import { PizzaType } from '../redux/pizzaSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addItems } from '../redux/cardSlice'
import { RootState } from '../redux/store'
import { CardItemType } from '../redux/cardSlice'
import { Link } from 'react-router-dom'

const localSizes = [26, 30, 40]

const PizzaBlock: React.FC<PizzaType> = ({ name, price, id, imageUrl, sizes, types}) => {

    const [activeSize, setActiveSize] = React.useState(sizes[0])

    const cardItems = useSelector((state : RootState) => state.card.cardItems.find((obj: CardItemType) => obj.id === id))
    const count = cardItems ? cardItems.count : 0

    const handleSize = (cuurentSize : number) => {
        setActiveSize(cuurentSize)
    }
    const dispatch = useDispatch()

    const addPizza = () => {
        const obj = {name, price, id, imageUrl, size : activeSize, types, count : 1}
        dispatch(addItems(obj))
    }
    
    return (
        <div className={styles.pizza_block}>
            <Link to={`/pizza/${id}`}>
                <img src={imageUrl} alt="pizza_block_img"/>
                <h3>{name}</h3>
            </Link>
            <ul className={styles.pizza_size}>
                {localSizes.map((cuurentSize, index) => (
                    <li 
                        className={activeSize === cuurentSize && styles.active}
                        onClick={() => handleSize(cuurentSize)}
                        key={index}>
                        {cuurentSize} см.
                    </li>
                ))}
            </ul>
            <div className={styles.pizza_block_footer}>
                <div className={styles.price}>от {price} ₽</div>
                <button className={styles.added} onClick={addPizza}>
                    <span>Добавить</span>
                    <i>{count}</i>
                </button>
            </div>
        </div>
    )
}

export default PizzaBlock