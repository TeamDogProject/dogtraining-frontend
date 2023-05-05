import './Home.css'
import { CarouselRatio } from './Carroussel'
import { UserContext } from '../../context/user'
import { getProfile } from '../../services/userService'
import { useContext, useEffect } from 'react'

const Home = () => {

  const { user, setUser } = useContext(UserContext)

  useEffect(()=>{
    getUser()
  },[])

  const getUser = async()=>{
    const result = await getProfile()
    setUser(result)
  }

  return (
    <div className='home'>
      

    <div className="home">

      <div>
        <h1>Welcome, {user.name}</h1>
        
        
      </div>
      <CarouselRatio />



    </div>
    </div>
  )
}


export default Home