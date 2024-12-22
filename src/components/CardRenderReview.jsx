import {useState} from 'react'
import { Card, Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';
import ButtonStandard from './ButtonStandard';
import { FileText } from 'lucide-react'



const CardRenderReview = () => {


  const [status,setStatus] = useState(1)

  return (
    <Card sx={{  backgroundColor:'#101722',height:200}}>
    <Box sx={{padding:2, width: '100%' }}>
       <Grid container spacing={2}>
        <Grid item xs={12} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
          <Box  sx={{boxShadow:status==1?5:0, padding:1, transition:3}}>
            <FileText size={160} color={'#20222F'} />
          </Box>
        </Grid>
       </Grid>
    </Box>
  </Card>
  )
}

export default CardRenderReview
