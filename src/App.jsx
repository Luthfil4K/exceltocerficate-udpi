import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DashboardPages from './pages/DashboardPages'
import DocumentPage from './pages/DocumentPage'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='flex h-screen bg-gray-800 text-gray-100 overflow-hidden' >

        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'></div>
          <div className='absolute inset-0 backdrop-blur-sm'></div>
        </div>    
        
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/' element={<DashboardPages></DashboardPages>}></Route>
          <Route path='/Document' element={<DocumentPage></DocumentPage>}></Route>
        </Routes>
      </div>
  )
}

export default App
