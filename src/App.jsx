import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/fonts/roboto'
import { UserContext } from './context/user'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

// Creating a client

const queryClient = new QueryClient()

function App() {

  const [user, setUser] = useState({})
  const obj = { user, setUser }

  return (
    // Providing to hole the app the client
    <div className="App" style={{ margin:0, padding:0 }}>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={obj}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App
