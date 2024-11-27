import React from 'react'
import Card1 from '../components/Card1'
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

          <Grid pt={5} container spacing={4} sx={{paddingLeft:5}} >
            <Grid item md={4} xs={12} >
              <Card1 title={'Ujian Dinas'}>
              </Card1>
            </Grid>
            <Grid item md={4} xs={12} >
              <Card1 title={'Penyesuaian Ijazah SMA'}>
              </Card1>
            </Grid>
            <Grid item md={4} xs={12} >
              <Card1 title={'Penyesuaian Ijazah D4/S1'}>
              </Card1>
            </Grid>
          </Grid>

      </motion.div>

    </main>
  </>
  )
}

export default DashboardPages
