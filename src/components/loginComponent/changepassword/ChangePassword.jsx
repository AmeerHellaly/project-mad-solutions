import React, { useEffect } from 'react'
import { AppBar, Box, Button, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import backgroundImage from '../../../assets/images/Image2.png'
import logo from '../../../assets/images/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { useTranslation } from 'react-i18next';
const ChangePassword = () => {
  const [t,i18next]=useTranslation()
  const langDir=i18next.dir()
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
         <AppBar>
      <Toolbar  sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#074143',
        }}>
      </Toolbar>
      </AppBar>

    {/* right section */}
    <Box
        sx={{
          display: 'flex',
          height: '100vh', 
          overflow: 'hidden', 
        }}
      >
    <Box 
        sx={{ 
          flex: 1, 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: {xs:'none',md:'flex'},
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <Box sx={{
             width: '350px',
             height: '350px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius:'50%',
            position:'relative',
            zIndex:'2'
        }}>
        <Box component={'img'} src={logo} 
        sx={{
            width:'120px',
            height:'120px',
            mb:'10px' 
        }}/>
        <Typography sx={{
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:'18px',
        textAlign:'center',
        color:'#000',
        textTransform:'uppercase'
        }}>
        {t('construction')}
        </Typography>
         </Box>
    </Box>
        {/* left section */}
        <Box sx={{
            flex:1,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'2rem'

        }}>
            <Box sx={{width:'100%',maxWidth:'400px',textAlign:'center'}}>
                 
            
            <Typography sx={{
            fontFamily:'Lato',
            fontWeight:700,
            fontSize:'36px',
            textTransform:'uppercase',
            mb:2
            }}>{t('change-password')}</Typography>

        <TextField 
        label={t('email')}
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
        label={t('password')}
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
          <TextField 
        label={t('re-password')}
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
         <Typography sx={{
            fontFamily:'Inter',
            fontWeight:500,
            fontSize:langDir==='rtl'?'18px':'14px',
            textTransform:'uppercase',
            mb:2,
            lineHeight:'18.15px'
         }}>{t('digit-code')}</Typography>
         <Button variant='contained' fullWidth sx={{
            padding:'10px 0',
            borderRadius:'10px',
            border:'1px solid #121C17',
            backgroundColor: '#2BE784', 
            fontSize:'16px',
            color: '#000',
         }}>{t('send-code')}</Button>
        </Box>
        </Box>
        </Box>
        </>
  )
}

export default ChangePassword