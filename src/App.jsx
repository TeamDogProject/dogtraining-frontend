import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/fonts/roboto'
import { UserContext } from './context/user'
import { LogingContext } from './context/loginContext'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState({})
  
  const obj = { user, setUser }
  const obj2 = { isLoggedIn, setIsLoggedIn }

  return (
    // Providing to hole the app the client
    <div className="App" style={{ margin: 0, padding: 0 }}>

      <LogingContext.Provider value={obj2}>
        <UserContext.Provider value={obj}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </LogingContext.Provider>
      
    </div>
  )
}

export default App
