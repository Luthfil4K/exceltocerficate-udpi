import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import {motion} from 'framer-motion'


const DashboardPages = () => {
  return (
  <>
    <main className='flex-1 overflow-auto relative z--10'>

      <motion.div 
        className="grid grid-cols-1 gap 5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >
          <div>test</div>
        
      </motion.div>

    </main>
  </>
  )
}

export default DashboardPages
