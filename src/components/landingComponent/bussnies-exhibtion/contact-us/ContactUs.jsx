import React from 'react'
import { Box, Grid, Typography,useTheme } from '@mui/material'
import locationIcon from '../../../../assets/images/locationIcon.png'
import whatsappIcon from '../../../../assets/images/whats-appIcon.png'
import messageIcon from '../../../../assets/images/messageIcon.png'
import { useTranslation } from 'react-i18next'
const ContactUs = () => {
    const [t]=useTranslation()
    const theme=useTheme()
    const isDarkMode = theme.palette.mode === 'dark';
    const textColor=isDarkMode?'#FFFFFF':'#121C17'
    const iconFilter = isDarkMode ? 'invert(1)' : 'none';
  return (
    <Grid container spacing={2}  sx={{display:'flex',justifyContent:'space-between',flexDirection: { xs: 'column', md: 'row' }, margin: "10px",}}>
    <Grid item>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: {textColor}, textTransform: "uppercase", fontSize: "35px" }}>
            {t('contact-us')}
        </Typography>
    </Grid>
        <Grid item sx={{display:'flex',alignItems:'center'}} >
            <Box component={'img'} sx={{ filter: iconFilter }} src={locationIcon} />
            <Typography sx={{ marginLeft: 1 }}>
            1234 Greenway Drive<br />Springfield, IL 62701
            </Typography>
        </Grid>
        <Grid item sx={{display:'flex',alignItems:'center'}} >
            <Box component={'img'} sx={{ filter: iconFilter }} src={whatsappIcon} />
            <Typography sx={{ marginLeft: 1 }}>
            (555) 123-4567
            </Typography>
        </Grid>
        <Grid item sx={{display:'flex',alignItems:'center'}} >
            <Box component={'img'} sx={{ filter: iconFilter }} src={messageIcon} />
            <Typography sx={{ marginLeft: 1 }}>
            info@zandnconstruction.com
            </Typography>
        </Grid>
</Grid>
  )
}

export default ContactUs
