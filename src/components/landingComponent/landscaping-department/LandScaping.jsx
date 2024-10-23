import { Grid } from '@mui/material'
import React from 'react'
import Heading from '../../../layout/haeding/Heading'
import Shrubs from './shrubs/Shrubs'
import Pavments from './pavments/Pavments'

const LandScaping = () => {
  return (
    <div>
      <Grid container style={{paddingTop:'0px'}}>
        <Heading text={'landscaping Department'} backgroundColor={'#59ED9F'} />
        <Grid item xs={12} style={{ padding: '2rem' }}>
            <Shrubs/>
            <Pavments/>
        </Grid>
      </Grid>
    </div>
  )
}

export default LandScaping
