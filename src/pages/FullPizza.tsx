import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from '../styles/fullPizza.module.scss'
import loading from '../img/home/loading.gif'

const FullPizza: React.FC = () => {

    const {id} = useParams()

    const [pizza, setPizza] = React.useState<{
      title: string,
      imageUrl: string,
      price: number
    }>()

    console.log(pizza?.title);
    
    const navigate = useNavigate()

    React.useEffect(() => {
      async function fetchPizza() {
        try{
          const {data} =  await axios.get(`https://62ea932ead295463258ff889.mockapi.io/items/` + id)
          setPizza(data)
        }catch(error){
          alert('error')
          navigate('/')
        }
      }
      fetchPizza()
    }, [])

    return (
      <div className={styles.full_pizza}>
          {
            pizza ? 
            <>
              <img src={pizza.imageUrl} alt="imageUrl"/>
              <div className={styles.info}>
                <h2>{pizza.title}</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam accusantium odio. Nisi in facere reprehenderit qui sapiente? Repellendus, asperiores!</p>
                 <Link to='/'>Вернуться назад</Link>
             </div>
            </>
            : <img src={loading} className={styles.loading}/>
          }
      </div>
  )
}

export default FullPizza