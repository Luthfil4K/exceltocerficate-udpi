import {useState} from 'react'

import { Card, Divider, Typography, Grid } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';





const CardRenderDescription = (props) => {
  const [value, setValue] = useState  (0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>
      <Card sx={{ backgroundColor:'#101722',height:200}}>
        <Box sx={{padding:2, width: '100%' }}>
           <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant={'h6'} color={'white'}>Mockup</Typography>
            </Grid>
           </Grid>
        </Box>
        <Divider color={'#26354C'} ></Divider>
        <Box sx={{padding:2, width: '100%' }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='' color={'white'}>test</Typography>
            </Grid>
           </Grid>
        </Box>
      </Card>
    </div>
  )
}

export default CardRenderDescription
