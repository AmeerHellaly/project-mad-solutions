import { Grid,useTheme } from '@mui/material'
import React from 'react'
import Heading from '../../../layout/haeding/Heading'
import Interior from './interior-section/Interior'
import Exterior from './interior-section/Exterior'
import ContactUs from './contact-us/ContactUs'
import { useTranslation } from 'react-i18next'

const BussniesExhibtion = () => {
  const [t]=useTranslation()
  const theme=useTheme()
  const isDarkMode = theme.palette.mode === 'dark';
  const backGround=isDarkMode?'#000':'#0E7E83'
  return (
    <Grid container  backgroundColor={backGround}   style={{paddingTop:'0px',paddingBottom:'2rem'}}>
      
        <Heading backgroundColor={'#0E7E83'} text={t('business')}/>
        <Grid container item xs={12} justifyContent="space-around" spacing={0} >
            <Interior/>
            <Exterior/>
            <ContactUs/>
        </Grid>
    </Grid>
  )
}

export default BussniesExhibtion
