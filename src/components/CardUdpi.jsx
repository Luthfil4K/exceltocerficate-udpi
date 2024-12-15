import { Grid, Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'
import ButtonStandard from  './ButtonStandard'

const CardUdpi = (props) => {
  
  return (
    <>
    <div class="card">
      <div class="card2">
        <Grid bgColor='red' container>
          <Grid item md={12} sx={{alignItems:'center',height:280 }}>
            <Typography sx={{fontSize:"20px", fontWeight:600}}>
              {props.title}
            </Typography>
          </Grid>
          <Grid item md={12} sx={{justifyContent:'center',display:'flex', height:40}}>
            <ButtonStandard >Buat</ButtonStandard>
          </Grid>
        </Grid>
      </div>
    </div>

    </>
  )
}

export default CardUdpi
