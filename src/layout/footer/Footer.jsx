
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png'
import logoFacebook from '../../assets/images/devicon_facebook.png'
import logoInstagram from '../../assets/images/skill-icons_instagram.png'

const Footer = () => {
  return (
    <>
      <Grid container spacing={4} sx={{  background: "linear-gradient(180deg, #074143 0%, #031C1D 100%)", padding: 2, color: '#fff' }}>
        <Grid item xs={12} md={3}>
          <Box component="img" src={logo} sx={{ marginBottom: 2 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box component="img" src={logoFacebook} sx={{ width: '30px', height: '30px' }} />
            <Box component="img" src={logoInstagram} sx={{ width: '30px', height: '30px' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Business Hours:
          </Typography>
          <Typography>Monday - Friday: 8 AM - 6 PM</Typography>
          <Typography>Saturday: 9 AM - 4 PM</Typography>
          <Typography>Sunday: Closed</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Quick Links:
          </Typography>
          <Typography>• Home</Typography>
          <Typography>• About Us</Typography>
          <Typography>• Services</Typography>
          <Typography>• Projects</Typography>
          <Typography>• Contact</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Awards and Certifications:
          </Typography>
          <Typography>“Proud Member of the National Association of Landscape Professionals”</Typography>
          <Typography>“Certified Green Builder”</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ backgroundColor: '#043E41', padding: 2, color: '#fff' }}>
        <Typography variant="body2">
          © 2024 Z AND N CONSTRUCTION AND LANDSCAPING. ALL RIGHTS RESERVED.
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
