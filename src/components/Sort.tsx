import React from 'react'
import { useDispatch } from 'react-redux'
import { setSort } from '../redux/filterSlice'
import styles from '../styles/sort.module.scss'
import { sortType } from '../redux/filterSlice'

const sortList : sortType[] = [
    {name : 'популярности', sortProperty: 'rating'},
    {name : 'по цене', sortProperty: 'price'},
    {name : 'по алфавиту', sortProperty: 'title'}
]

const Sort: React.FC = () => {

    const dispatch = useDispatch()

    const [openSort, setOpenSort] = React.useState(false)
    const [activeSort, setActiveSort] = React.useState(sortList[0].name)

    const handleActiveSort = (obj : sortType) => {
        setActiveSort(obj.name)
        setOpenSort(!activeSort)
        dispatch(setSort(obj))
    }
    
    return (
    <div className={styles.sort}>
        <b className={ openSort && styles.active}></b>
        <div>Сортировка по: 
            <span onClick={() => setOpenSort(!openSort)}>{activeSort}</span>
            {openSort &&
                <ul className={styles.sort_list}>
                    {sortList.map((obj, index) => (
                            <li className={obj.name === activeSort ?  styles.active : ''}
                                onClick={() => handleActiveSort(obj)}
                                key={index}>
                                    {obj.name}
                            </li>
                        )
                    )}
                </ul>
            }
        </div>
    </div>
    )
}

export default Sort