import { Grid } from '@mui/material'
import React from 'react'
import Heading from '../../../layout/haeding/Heading'
import Interior from './interior-section/Interior'
import Exterior from './interior-section/Exterior'
import ContactUs from './contact-us/ContactUs'

const BussniesExhibtion = () => {
  return (
    <Grid container  backgroundColor='#0E7E83'   style={{paddingTop:'0px',paddingBottom:'2rem'}}>
        <Heading backgroundColor={'#0E7E83'} text={'Business exhibition'}/>
        <Grid container item xs={12} justifyContent="space-around" spacing={0} >
            <Interior/>
            <Exterior/>
            <ContactUs/>
        </Grid>
    </Grid>
  )
}

export default BussniesExhibtion
