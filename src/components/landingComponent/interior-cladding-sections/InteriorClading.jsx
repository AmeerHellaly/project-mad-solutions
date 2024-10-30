import React from 'react'
import { Grid } from '@mui/material'
import Heading from '../../../layout/haeding/Heading'
import Floors from './floors/Floors'
import Walls from './walls/Walls'
import Sinks from './sinks/Sinks'
import Faucets from './faucets/Faucets'
import  Kitchen  from './kitchen/Kitchen'
import { useTranslation } from 'react-i18next'
const InteriorClading = () => {
  const [t]=useTranslation()
  return (
    <div>
        <Grid container style={{  paddingTop: '0px' }}>
            <Heading text={t('interior-cladding')}/>
            <Grid item xs={12} style={{ padding: '2rem' }}>
                <Floors/>
                <Walls/>
                <Sinks/>
                <Faucets/>
                <Kitchen/>
            </Grid>
        </Grid>
    </div>
  )
}

export default InteriorClading
