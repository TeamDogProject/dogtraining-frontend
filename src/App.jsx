import axios from 'axios'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/fonts/roboto'
import { UserContext } from './context/user'
import { useState } from 'react'



import './index.css'

function App() {

  const [user, setUser] = useState({})
  const obj = { user, setUser }

  return (
    // Providing to hole the app the client
    <div className="App" style={{ margin:0, padding:0 }}>
 
        <UserContext.Provider value={obj}>
          <RouterProvider router={router} />
        </UserContext.Provider>
 
    </div>
  )
}

export default App
