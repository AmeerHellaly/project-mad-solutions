import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, InputAdornment } from '@mui/material';
import BackgroundImage from '../../assets/images/Rectangle11.png'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Link, useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
const LoginComponent = () => {
  const [t,i18next]=useTranslation()
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  useEffect(() => {
    const updateDirection = () => {
      window.document.dir = i18next.dir();
    };

    updateDirection(); 

    i18next.on('languageChanged', updateDirection);

    return () => {
      i18next.off('languageChanged', updateDirection);
    };
  }, []);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const credentials={
      email,
      password
    }

    try {
      const response = await fetch('https://backendsec3.trainees-mad-s.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // تغيير إلى application/json
        },
        body: JSON.stringify(credentials),
      });
        console.log(response)
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      if (data.access_token) {
        const token = data.access_token;

        localStorage.setItem('token', token);
        navigate('/profile')
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
}

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#074143' }}>
        <Toolbar>
          
        </Toolbar>
      </AppBar>
      {/* {left section} */}
      <Box
        sx={{
          display: 'flex',
          height: 'calc(100vh - 64px)', 
          overflow: 'hidden', 
        }}
      >
        <Box sx={{
          flex:1,
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          padding:'2rem'
        }}>
          <Box sx={{width:'100%',maxWidth:'400px',textAlign:'center'}}>
          <Typography  sx={{
            fontFamily:'Lato',
            fontWeight:700,
            fontSize:{xs:'36px',md:'64px'},
            textTransform:'uppercase',
            mb:2,
            
            }}>{t("welcome")}
            </Typography>
            <Typography sx={{
            fontFamily:'Lato',
            fontWeight:700,
            fontSize:{xs:'16px',md:'22px'},
            textTransform:'uppercase',
            mb:2
            }}>{t("reinvent")}
            </Typography>
            <form  onSubmit={handleSubmit}>
            <TextField 
          label={t("email")}
          variant='outlined'
          fullWidth
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          sx={{mb:2}}
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
          label={t("password")}
          type='password'
          variant='outlined'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          fullWidth
          sx={{mb:2}}
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
 
         <Typography sx={{ textAlign:'center',textTransform:'uppercase'}} >
         {t("account")}
            <Link style={{textDecoration:'none',color:'#0E7E83'}} to="/sign-up" underline="hover">
            {t("sign-up")}
            </Link>
          </Typography>
          <Typography sx={{mt:2,textAlign:'center',textTransform:'uppercase' }}>
          {t("forget-password")}
            
            <Link style={{textDecoration:'none',color:'#0E7E83',}} to="/change-password" underline="hover"> 
            {t("chnage-password")}
            </Link>
          </Typography>
         
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ backgroundColor: '#2BE784', color: '#000', mt: 2,borderRadius:'10px',border:'1px solid #121C17' }}
            >
               {t("login")}
            </Button>
            </form>
          </Box>
        </Box>
            {/* {right section} */}
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