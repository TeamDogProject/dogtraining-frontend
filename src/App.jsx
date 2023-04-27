import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/fonts/roboto'
import { UserContext } from './context/user'
import { useState } from 'react'

function App() {

  const [user, setUser]= useState({})
  const obj = {user, setUser}

  return (
    <div className="App">
      <UserContext.Provider value={obj}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  )
}

export default App
