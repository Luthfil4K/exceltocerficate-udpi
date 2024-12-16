import { Grid, Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'
import { FileText } from 'lucide-react'
import ButtonStandard from  './ButtonStandard'
import { Link } from 'react-router-dom'

const CardUdpi = (props) => {
  
  
  return (
    <>
    <div class="card">
      <div class="card2">
        <Grid bgColor='red' container>
          <Grid item md={12} sx={{alignItems:'center',height:30 }}>
            <Typography sx={{fontSize:"20px", fontWeight:600}}>
              {props.title}
            </Typography>
          </Grid>
          <Grid item md={12} sx={{alignItems:'center', height:250, display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <FileText size={180} color={'#20222F'} />
          </Grid>
          <Grid item md={12} sx={{justifyContent:'center',display:'flex', height:40}}>
          <Link className='' key={'asd'} to={'RenderPage'}>
            <ButtonStandard >Buat</ButtonStandard>
          </Link>
          </Grid>
        </Grid>
      </div>
    </div>

    </>
  )
}

export default CardUdpi
