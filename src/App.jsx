import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes,useLocation } from 'react-router-dom'
import DashboardPages from './pages/DashboardPages'
import DocumentPage from './pages/DocumentPage'
import Sidebar from './components/Sidebar'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  console.log(location)
  console.log("pathname: " + location.pathname)
  console.log(location)
  return (
      <div className='flex h-screen bg-gray-800 text-gray-100 overflow-hidden' >

        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'></div>
          <div className='absolute inset-0 backdrop-blur-sm'></div>
        </div>    
        <Sidebar></Sidebar>
        <div className="flex-1 overflow-auto relative z-10 ">
          <Header title={ location.pathname.split('/')}></Header>  
        <Routes >
          <Route path='/Dashboard' element={<DashboardPages></DashboardPages>}></Route>
          <Route path='/Document' element={<DocumentPage></DocumentPage>}></Route>
        </Routes>
        </div>
      </div>
  )
}

export default App
