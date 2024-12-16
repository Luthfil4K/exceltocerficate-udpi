import React from 'react'
import { Grid, Typography, Card } from '@mui/material'

const RenderPage = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item md={8}>
            <Card>
                test
            </Card>
        </Grid>
        <Grid item md={4}>
            <Card>
                test
            </Card>
        </Grid>
        <Grid item md={12}>
            <Card>
                test
            </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default RenderPage
