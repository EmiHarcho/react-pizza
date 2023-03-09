import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategoryId } from '../redux/filterSlice'
import styles from '../styles/categories.module.scss'

const Categories: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const [active, setActive] = React.useState(0)
    const catigories : string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const handleActive = (index: number) => {
        setActive(index)
        dispatch(setCategoryId(index))
    }
    
    return (
        <ul className={styles.categories}>
            {catigories.map((item, index) => (
                    <li key={index} 
                        className={active === index ? styles.active : ''}
                        onClick={() => handleActive(index)}>
                        {item}
                    </li>
                )
            )}
        </ul>
    )
})

export default Categories