import React from 'react'
import { Grid, Typography, Card } from '@mui/material'
import CardRenderDescription from '../components/CardRenderDescription'
import CardRenderTable from '../components/CardRenderTable'
import CardRenderReview from '../components/CardRenderReview'


const RenderPage = (props) => {
  return (
    <div>
      <Grid sx={{padding:2}} p-4 container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <CardRenderDescription title={props.taskTitle}>
            </CardRenderDescription>
            </Grid>
            <Grid item xs={4}>
           <CardRenderReview/>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Card sx={{height:300, padding:2, overflow:'auto',backgroundColor:'#101722',}}>
              <CardRenderTable></CardRenderTable>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default RenderPage
