import React from 'react'
import styles from '../styles/search.module.scss'
import search_icon from '../img/home/search_icon2.png'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../redux/filterSlice'
import debounce from "lodash.debounce";

const Search: React.FC = () => {

    const dispatch = useDispatch()
    const [value, setValue] = React.useState('')

    const changeValue : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    const updateSearchValue = React.useCallback(
      debounce((str : string) => {
        dispatch(setSearchValue(str))
      }, 1000), []
    )

  return (
    <div className={styles.search}>
        <img src={search_icon} alt="icon"/>
        <input type="text" value={value} onChange={changeValue}/>
    </div>
  )
}

export default Search