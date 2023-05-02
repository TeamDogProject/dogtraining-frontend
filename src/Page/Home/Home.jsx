import './Home.css'
import CarouselComponent from './Carroussel'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user'
import { getProfile } from '../../services/userService'
import { useContext, useEffect } from 'react'

const Home = () => {

  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

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
        <button onClick={logout}>Logout</button>
        
      </div>
      <CarouselComponent />

    </div>
  )
}

export default Home