import axios from 'axios'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/fonts/roboto'

import './index.css'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
