import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, InputAdornment } from '@mui/material';
import BackgroundImage from '../../assets/images/Rectangle11.png'
import LogoImage from '../../assets/images/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import {Link} from 'react-router-dom'
const LoginComponent = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#074143' }}>
        <Toolbar>
          
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          height: 'calc(100vh - 64px)', 
          overflow: 'hidden', 
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            backgroundColor: '#f0f8f7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // padding: '2rem',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
              WELCOME
            </Typography>
            <Typography variant="h6" >
              REINVENT YOUR SPACE WITH US
            </Typography>
            <Box
              component="img"
              src={LogoImage}
              alt="logo"
              sx={{ width: { xs: '100px', md: '150px' }, mb: 4 }}
            />
          </Box>

          {/* الفورم */}
          <Box sx={{ width: '100%', maxWidth: '400px' }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email Address"
              type="email"
              sx={{ mb: 2 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                },
              }} 
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              sx={{ mb: 2 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                },
              }} 
            />
            <Typography sx={{ textAlign:'center',textTransform:'uppercase' }} >
            Don't have an account?{' '}
            <Link style={{textDecoration:'none',color:'#0E7E83'}} to="/sign-up" underline="hover">
              Sign Up
            </Link>
          </Typography>
          <Typography sx={{mt:2,textAlign:'center',textTransform:'uppercase' }}>
            Forgot password?{' '}
            <Link style={{textDecoration:'none',color:'#0E7E83'}} to="/change-password" underline="hover">
              Change Password
            </Link>
          </Typography>
          <Link to='/profile'>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: '#2BE784', color: '#000', mt: 2,borderRadius:'10px',border:'1px solid #121C17' }}
            >
              LOGIN
            </Button>
          </Link>
          </Box>


   
        </Box>

        <Box
          sx={{
            width: { xs: '0%', md: '50%' },
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', md: 'block' }
          }}
        />
      </Box>
    </>
  );
};

export default LoginComponent;
