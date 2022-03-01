import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Layout from "../../components/Layout"
const Order = () => {
  return (
   <Layout title = 'Place Order'>
      <Grid container spacing={2}>
        <Typography variant='h1'>
          Order details
        </Typography>
        <div className='flex'>
          <Grid item md={8}>

          </Grid>
          <Grid item md={4}>

          </Grid>
        </div>
      </Grid>
   </Layout> 
  )
}

export default Order