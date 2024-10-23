import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import locationIcon from '../../../../assets/images/locationIcon.png'
import whatsappIcon from '../../../../assets/images/whats-appIcon.png'
import messageIcon from '../../../../assets/images/messageIcon.png'
const ContactUs = () => {
  return (
    <Grid container spacing={2}  sx={{display:'flex',justifyContent:'space-between',flexDirection: { xs: 'column', md: 'row' }, margin: "10px",}}>
    <Grid item>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#121C17", textTransform: "uppercase", fontSize: "35px" }}>
            Contact Us
        </Typography>
    </Grid>
        <Grid item sx={{display:'flex',alignItems:'center'}} >
            <Box component={'img'} src={locationIcon} />
            <Typography sx={{ marginLeft: 1 }}>
            1234 Greenway Drive<br />Springfield, IL 62701
            </Typography>
        </Grid>
        <Grid item sx={{display:'flex',alignItems:'center'}} >
            <Box component={'img'} src={whatsappIcon} />
            <Typography sx={{ marginLeft: 1 }}>
            (555) 123-4567
            </Typography>
        </Grid>
        <Grid item sx={{display:'flex',alignItems:'center'}} >
            <Box component={'img'} src={messageIcon} />
            <Typography sx={{ marginLeft: 1 }}>
            info@zandnconstruction.com
            </Typography>
        </Grid>
</Grid>
  )
}

export default ContactUs
