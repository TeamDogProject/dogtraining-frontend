import './Home.css'
import CarouselComponent from './Carroussel'
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
    <div className="home">

      <div>
        <h1>Welcome, {user.name}</h1>
        
        
      </div>
      <CarouselComponent />

    </div>
  )
}

export default Home