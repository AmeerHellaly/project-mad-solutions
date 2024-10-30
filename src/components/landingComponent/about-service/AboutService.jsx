
import { Grid } from '@mui/material'
import React from 'react'
import Heading from '../../../layout/haeding/Heading'
import DetailService from './detail-service/DetailService'
import Video from './video/Video'
import { useTranslation } from 'react-i18next'

const AboutService = () => {
  const [t]=useTranslation()
  return (
    <Grid container style={{minHeight:'100vh ',paddingTop:'0px'}}> 
        <Heading backgroundColor={'#0E7E83'} text={t('about-us')}/>
        <Grid item xs={12} style={{ padding: '2rem' }}>
            <DetailService/>
            <Video/>
        </Grid>
    </Grid>
  )
}

export default AboutService
