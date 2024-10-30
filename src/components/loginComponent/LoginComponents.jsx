import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, InputAdornment } from '@mui/material';
import BackgroundImage from '../../assets/images/Rectangle11.png'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
const LoginComponent = () => {
  const [t,i18next]=useTranslation()
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
            
            }}>{t("welcome")}</Typography>
            <Typography sx={{
            fontFamily:'Lato',
            fontWeight:700,
            fontSize:{xs:'16px',md:'22px'},
            textTransform:'uppercase',
            mb:2
            }}>{t("reinvent")}</Typography>
            <TextField 
          label={t("email")}
          variant='outlined'
          fullWidth
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
          <Link style={{textDecoration:'none'}} to='/profile'>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: '#2BE784', color: '#000', mt: 2,borderRadius:'10px',border:'1px solid #121C17' }}
            >
               {t("login")}
            </Button>
          </Link> 
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