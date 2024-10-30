import { Grid, Typography,useTheme } from '@mui/material'
import i18next from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

const DetailService = () => {
    const [t]=useTranslation()
    const langDir=i18next.dir()
    const theme=useTheme()
    const isDarkMode = theme.palette.mode === 'dark';
    const textColor=isDarkMode?'#FFFFFF':'#121C17';
  return (
    <Grid container spacing={2}  sx={{ marginBottom: '4rem' }}> 
        <Grid item xs={12} sm={6}>
            <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor, fontSize: langDir==='rtl'?"24px":"16px"}}>
                <span style={{fontWeight:'bold', fontSize: langDir==='rtl'?"32px":"25px",fontFamily:'Inter'}}>{t('welcome')}</span><br/>
                {t('text-welcome')}
            </Typography>
            <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor, fontSize: langDir==='rtl'?"24px":"16px"}}>
                <span style={{fontWeight:'bold', fontSize: langDir==='rtl'?"32px":"25px",fontFamily:'Inter'}}>{t('mission')}</span><br/>
                {t('text-mission')}
            </Typography>
            <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor, fontSize: langDir==='rtl'?"24px":"16px"}}>
                <span style={{fontWeight:'bold', fontSize: langDir==='rtl'?"32px":"25px",fontFamily:'Inter'}}>{t('team')}</span><br/>
                {t('text-team')}
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor, fontSize: langDir==='rtl'?"24px":"16px"}}>
                <span style={{fontWeight:'bold', fontSize: langDir==='rtl'?"32px":"25px",fontFamily:'Inter'}}>{t('offer')}</span><br/>
                {t('text-offer')}
            </Typography>
            <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor, fontSize: langDir==='rtl'?"24px":"16px"}}>
                <span style={{fontWeight:'bold', fontSize: langDir==='rtl'?"32px":"25px",fontFamily:'Inter'}}>{t('choose')}</span><br/>
                {t('text-choose')}
            </Typography>
        </Grid>
    </Grid>
  )
}

export default DetailService
