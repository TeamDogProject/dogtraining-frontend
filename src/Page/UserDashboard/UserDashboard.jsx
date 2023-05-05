import * as React from 'react'
import { useState, useEffect } from 'react'
import { getUserDogs } from '../../services/userService';




function UserDashBoard() {
  const [userDog, setUserDog] = useState([])


  useEffect(()=>{
    handleUserDog()
  },[])

  const handleUserDog = async () => {
    const result = await getUserDogs()
    setUserDog(result)
    console.log(result)
  }

  return (
   
      <div>UserDashBoard{userDog} </div>
  
  )
}

export default UserDashBoard