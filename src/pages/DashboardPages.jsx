import React from 'react'
import CardUdpi from '../components/CardUdpi'
import Header from '../components/Header'
import {motion} from 'framer-motion'
import Grid from '@mui/material/Grid'
import { Card} from '@mui/material'



const DashboardPages = () => {
  return (
  <>
    <main className='max-w-7xl mx-auto lg'>
      <motion.div 
        className=""
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >

          <Grid  pt={5} container spacing={4} sx={{paddingLeft:5}} >
            <Grid item md={4} xs={12} >
              <CardUdpi title={'Ujian Dinas'}>
              </CardUdpi>
            </Grid>
            <Grid item md={4} xs={12} >
              <CardUdpi title={'Penyesuaian Ijazah SMA'}>
              </CardUdpi>
            </Grid>
            <Grid item md={4} xs={12} >
              <CardUdpi title={'Penyesuaian Ijazah D4/S1'}>
              </CardUdpi>
            </Grid>
          </Grid>

      </motion.div>

    </main>
  </>
  )
}

export default DashboardPages
